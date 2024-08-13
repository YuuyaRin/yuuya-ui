import YuuyaButton from './Button/Button.vue'
import YuuyaCollapse from './Collapse/Collapse.vue'

declare module 'vue' {
  export interface GlobalComponents {
    YuuyaButton: typeof YuuyaButton
    YuuyaCollapse: typeof YuuyaCollapse
  }
}
