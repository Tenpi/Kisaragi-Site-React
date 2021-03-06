import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {BrowserRouter as Router} from "react-router-dom"
import images from "./structures/Images"

// images.animateFavicon()
if (process.env.TESTING === "yes") {
    ReactDOM.render(<Router><App/></Router>, document.getElementById("app"))
} else {
    ReactDOM.hydrate(<Router><App/></Router>, document.getElementById("app"))
}
