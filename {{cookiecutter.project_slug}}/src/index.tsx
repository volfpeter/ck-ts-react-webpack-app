///<reference types="webpack-env" />

import React from "react"
import ReactDOM from "react-dom"

import { Main } from "./Main"
import "./i18n"

const render = () => {
    ReactDOM.render(<Main />, document.getElementById("root"))
}

render()
