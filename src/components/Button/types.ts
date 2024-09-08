// button类型字面量
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'large' | 'small'
export type NativeType = 'button' | 'submit' | 'reset'

// button 属性 interface
export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  nativeType?: NativeType
  autofocus?: boolean
  icon: string
  loading: boolean
}
// button 暴露实例ref interface
export type ButtonInstance = {
  ref: HTMLButtonElement
}
