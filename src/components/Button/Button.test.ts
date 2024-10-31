import { describe, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button.vue', () => {
  test('basic button', () => {
    // 挂载组件
    const wrapper = mount(Button, {
      props: {
        type: 'primary'
      },
      slots: {
        default: 'button'
      }
    })
    console.log(wrapper.html()) // 打印组件的html
    // expect(wrapper.find('.btn-primary').exists()).toBe(true)
  })
})
