import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "./styles/variables.css"
import "./styles/form.css"
import IMask from "imask"
import App from "./components/App"

import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

const txtBase = document.getElementById("txtBase")
const numberMask = IMask(txtBase, {
  mask: Number,
  scale: 2,
  signed: false,
  radix: ".",
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
