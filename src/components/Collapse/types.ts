import type { Ref, InjectionKey } from 'vue'
export type NameType = string | number

export interface CollapseProps {
  modelValue: NameType[] // 展开的面板
  accordion?: boolean // 是否开启手风琴模式
}

export interface CollapseItemProps {
  name: NameType // 唯一标识
  title?: string // 标题
  disabled?: boolean // 是否禁用
}

// 定义父子组件通信provide/inject传递的内容类型
export interface CollapseContext {
  activeNames: Ref<NameType[]>
  handleItemClick: (name: NameType) => void
}
// 定义父组件emit类型
export interface CollpaseEmits {
  (e: 'update:modelValue', value: NameType[]): void // 用于实现双向绑定
  (e: 'change', value: NameType[]): void // 用于实现监听
}

// 利用symbol声明独一无二的inject key值
export const CollapseContextKey: InjectionKey<CollapseContext> = Symbol('CollapseContextKey')
