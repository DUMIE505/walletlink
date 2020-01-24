import { Snackbar } from "./components/Snackbar"

const snackbar = new Snackbar()

window.addEventListener("load", () => {
  snackbar.render(document.body)
})
