import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExtendComponent',
  props: {
    render: {
      type: Function,
      default: () => void 0
    }
  },
  setup(props) {
    return () => {
      const { render } = props
      return render && render()
    }
  }
})
