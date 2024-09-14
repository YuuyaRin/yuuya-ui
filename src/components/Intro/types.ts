// 单步引导配置
interface ITips {
  content: string
  title?: string
  el: string
  tipPosition?: 'top' | 'bottom' | 'left' | 'right'
  onNext?: () => boolean
  onPrev?: () => boolean
}
// 整体引导配置
interface IIntroConfig {
  backgroundColor?: string
  titleStyle?: object
  contentStyle?: object
  tips: Array<ITips>
}
// 组件props
export interface IntroProps {
  modelValue: Boolean
  config: IIntroConfig
}

// 遮罩层位置
interface IMaskPos {
  left: number
  top: number
  width: number
  height: number
  radius: number
}
// 遮罩层props
export interface MaskProps {
  fill: string
  pos: IMaskPos
}
