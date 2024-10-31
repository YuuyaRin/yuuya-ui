// 执行 npx vitest example

import { expect, test, describe, vi, Mocked } from 'vitest'
import { testFn, request } from './utils'
import axios from 'axios' // 引入 axios 模块
vi.mock('axios') // 模拟 axios 模块
const mockAxios = axios as Mocked<typeof axios> // 类型断言 将 axios 模块模拟为 Mocked 类型
// test('test common matcher', () => {
//   const name = 'yuuya'
//   expect(name).toBe('yuuya')
//   expect(2 + 2).toBe(4)
//   expect(2 + 2).not.toBe(5)
// })

// test('test to be true or false', () => {
//   expect(1).toBeTruthy()
//   expect(0).toBeFalsy()
//   expect('test').toBeTruthy()
// })

// test('test number', () => {
//   expect(4).toBeGreaterThan(2)
//   expect(1).toBeLessThan(2)
// })
// test('test object', () => {
//   expect({ name: 'yuuya' }).toEqual({ name: 'yuuya' })
// })

describe('functions', () => {
  // 模拟函数
  test('create a mock funciton', () => {
    const callback = vi.fn() // 模拟函数
    testFn(12, callback) // 调用函数
    expect(callback).toHaveBeenCalled() // 是否调用过
    expect(callback).toHaveBeenCalledWith(12) // 是否调用过并传入了预期的参数 -> 12
  })
  // 监控函数
  test('spy on method', () => {
    const obj = {
      getName: () => 1
    }
    // spyOn 方法 用于监控对象的方法是
    // 监控 getName 方法是否被调用
    const spy = vi.spyOn(obj, 'getName')
    obj.getName()
    // 验证 getName 方法是否被调用
    expect(spy).toHaveBeenCalled()
    obj.getName()
    // 验证 getName 方法是否被调用了两次
    expect(spy).toHaveBeenCalledTimes(2)
  })
  // 模拟第三方模块
  test('mock third party module', async () => {
    // mockAxios.get.mockImplementation(() => Promise.resolve({ data: 123 })) // 模拟 axios.get 方法返回值为 123
    mockAxios.get.mockResolvedValue({ data: 123 }) // 模拟 axios.get 方法返回值为 123 (两种写法都可以)
    const result = await request() // 调用 request 方法
    expect(result).toBe(123) // 验证返回值为 123
  })
})
