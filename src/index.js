import React from "react"
import { createRoot } from "react-dom/client"

import "./css/app.scss"

import App from "./js/App"

const app = document.getElementById("app")
const root = createRoot(app)
root.render(<App />)