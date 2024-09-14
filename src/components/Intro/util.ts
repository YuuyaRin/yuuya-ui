// 节流
export const throttle = (fn: { (): void; apply?: any }, delay: number) => {
  let timerId: number | null | undefined = null
  let flag = true
  return function () {
    if (!flag) return
    flag = false
    const self = this
    // eslint-disable-next-line prefer-rest-params
    const args = arguments
    timerId && clearTimeout(timerId)
    timerId = setTimeout(function () {
      flag = true
      fn.apply(self, args)
    }, delay || 1000)
  }
}
