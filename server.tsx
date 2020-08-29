import path from "path"
import mime from "mime"
import cors from "cors"
import bodyParser from "body-parser"
import express from "express"
import webpack from "webpack"
import middleware from "webpack-dev-middleware"
import hot from "webpack-hot-middleware"
import config from "./webpack.config"
import favicon from "express-favicon"
import dotenv from "dotenv"
import ReactDOMServer from "react-dom/server"
import {StaticRouter as Router} from "react-router-dom"
import React from "react"
import App from "./App"
import fs from "fs"
const __dirname = path.resolve()

dotenv.config()
const app = express()
const compiler = webpack(config({platform: "web"}) as any)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use(favicon(__dirname + "/assets/icons/favicon.gif"))
app.disable("x-powered-by")
app.set("trust proxy", true)

if (process.env.TESTING === "yes") {
  app.use(middleware(compiler, {
    noInfo: true,
    serverSideRender: true,
    writeToDisk: false
  }))
  app.use(hot(compiler))
}

app.use(express.static(path.join(__dirname, "./public")))
app.use(express.static(path.join(__dirname, "./dist"), {index: false}))

app.get("*", function(req, res) {
  const html = ReactDOMServer.renderToString(<Router><App/></Router>)
  const data = fs.readFileSync(path.join(__dirname, "./dist/index.html"), {encoding: "utf-8"})
  const document = data.replace(`<div id="app"></div>`, `<div id="app">${html}</div>`)
  res.send(document)
})

app.listen(process.env.PORT || 8080, () => console.log("Started the website server!"))
