// Copyright (c) 2018-2020 Coinbase, Inc. <https://coinbase.com/>
// Licensed under the Apache License, version 2.0

import { h, render } from "preact"
import { cssReset } from "../cssReset"
import chevronSvg from "../images/chevronSvg"
import css from "./SnackbarCss"

export class Snackbar {
  public render(el: Element): void {
    render(<SnackbarContainer />, el)
  }
}

function SnackbarContainer() {
  return (
    <div class={cssReset}>
      <div class="-walletlink-snackbar">
        <SnackbarItem />
        <style>{css}</style>
      </div>
    </div>
  )
}

function SnackbarItem() {
  return (
    <div class="-walletlink-snackbar-item">
      <div class="-walletlink-snackbar-item-content">
        <div class="-walletlink-snackbar-item-content-message">
          hello world hello world hello world
        </div>
        <img
          class="-walletlink-snackbar-item-content-chevron"
          src={chevronSvg}
          alt="Expand"
        />
      </div>
      <div class="-walletlink-snackbar-item-progress-bar" />
      <div class="-walletlink-snackbar-item-actions">
        <div class="-walletlink-snackbar-item-actions-item">
          <span class="-walletlink-snackbar-item-actions-item-info">
            button description
          </span>
          <button class="-walletlink-snackbar-item-actions-item-button">
            click me
          </button>
        </div>
      </div>
    </div>
  )
}
