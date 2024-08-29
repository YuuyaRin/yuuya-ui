import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'

// 在FontAwesomeIcon的props基础上拓展自定义属性
export interface IconProps extends FontAwesomeIconProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  color?: string
}
