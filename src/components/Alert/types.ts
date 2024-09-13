export interface AlertProps {
  title?: string
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  description?: string
  closable?: boolean
  center?: boolean /*文本居中显示 */
  closeText?: string /* 自定义关闭按钮文本 */
  showIcon?: boolean /* 根据type显示类型图标 */
  effect?: 'light' | 'dark' /*主题 */
}
