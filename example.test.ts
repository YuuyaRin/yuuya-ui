// 执行 npx vitest example

import { expect, test, describe, vi } from 'vitest'
import { testFn } from './utils'
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
  // 监控函数 6:47
  test('spy on method', () => {
    const obj = {
      getName: () => 1
    }
    // 监控 getName 方法是否被调用
    const spy = vi.spyOn(obj, 'getName')
    obj.getName()
    // 验证 getName 方法是否被调用
    expect(spy).toHaveBeenCalled()
  })
})
