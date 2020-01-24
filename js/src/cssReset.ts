export function injectCssReset(): void {
  const styleEl = document.createElement("style")
  styleEl.type = "text/css"
  styleEl.appendChild(
    document.createTextNode(`
      .${cssReset}, .${cssReset} * { all: unset }
      .${cssReset} style { display: none }
    `)
  )
  document.documentElement.appendChild(styleEl)
}

export const cssReset = "-walletlink-css-reset"
