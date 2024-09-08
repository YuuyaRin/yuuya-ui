import YuuyaButton from './Button/Button.vue'
import YuuyaCollapse from './Collapse/Collapse.vue'
import YuuyaCollapseItem from './Collapse/CollapseItem.vue'
import YuuyaIcon from './Icon/Icon.vue'

declare module 'vue' {
  export interface GlobalComponents {
    YuuyaButton: typeof YuuyaButton
    YuuyaCollapse: typeof YuuyaCollapse
    YuuyaCollapseItem: typeof YuuyaCollapseItem
    YuuyaIcon: typeof YuuyaIcon
  }
}
