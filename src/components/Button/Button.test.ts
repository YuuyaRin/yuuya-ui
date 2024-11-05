import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Icon from '../Icon/index'
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
  test('icon button', () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'fa-star'
      },
      slots: {
        default: 'icon'
      },
      global: {
        stubs: ['FontAwesomeIcon'] // 模拟第三方组件库的组件
      }
    })
    console.log(wrapper.html())

    const iconElement = wrapper.findComponent(FontAwesomeIcon) // 断言组件是否包含FontAwesomeIcon组件
    expect(iconElement.exists()).toBe(true)
    expect(iconElement.attributes('icon')).toBe('fa-star') // 断言组件的icon属性是否为fa-star
  })
  test('loading button', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true
      },
      slots: {
        default: 'loading'
      },
      global: {
        stubs: ['Icon'] // 模拟第三方组件
      }
    })
    console.log(wrapper.html())

    const IconElement = wrapper.findComponent(Icon) // 断言组件是否包含Icon组件
    expect(IconElement.exists()).toBe(true)
    expect(IconElement.attributes('icon')).toBe('spinner') // 断言组件的icon属性是否为loading
    expect(wrapper.find('button').element.disabled).toBeDefined() // 断言组件的button是否为disabled
  })
})
