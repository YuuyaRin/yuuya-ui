import { describe, test, expect } from 'vitest'
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

    expect(wrapper.classes()).toContain('yuuya-button--primary') // 断言组件的class是否包含yuuya-button--primary

    // get方法获取组件中的元素
    expect(wrapper.get('button').text()).toBe('button') // 断言组件Slot中的text是否为button

    // events
    wrapper.get('button').trigger('click') // 触发click事件
    console.log('事件:', wrapper.emitted()) // 打印组件的emit事件
    expect(wrapper.emitted()).toHaveProperty('click') // 断言组件的emit事件是否包含click
  })
  test('disabled button', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      },
      slots: {
        default: 'disabled'
      }
    })
    expect(wrapper.attributes('disabled')).toBeDefined() // 断言组件的button是否包含disabled属性
    expect(wrapper.find('button').element.disabled).toBeDefined() // 断言组件的button是否为disabled,element为组件的根元素(原生属性)

    // events
    wrapper.get('button').trigger('click') // 触发click事件
    console.log('事件:', wrapper.emitted()) // 打印组件的emit事件
    expect(wrapper.emitted()).not.toHaveProperty('click') // 断言组件的emit事件是否包含click
  })
})
