function setCss(params = {}) {
  for (const attr in params) {
    const dom = document.querySelectorAll(attr)
    for (let i = 0; i < dom.length; i++) {
      const dom = document.querySelectorAll(attr)
      for (const subAttr in params[attr]) {
        dom[i].style[subAttr] = params[attr][subAttr]
      }
    }
  }
}
export {
  setCss
}
