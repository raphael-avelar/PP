export default ({ Vue }) => {
  const closeAllTooltips = (root) => {
    root.$children.forEach(e => {
      if (e.$vnode && e.$vnode.componentOptions && e.$vnode.componentOptions.tag && e.$vnode.componentOptions.tag === 'q-tooltip') {
        e.hide()
      }
      closeAllTooltips(e)
    })
  }

  Vue.prototype.$closeAllTooltips = closeAllTooltips
}
