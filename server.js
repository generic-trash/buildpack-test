const express = require('express')
const app = express()
const port = 3000 || process.env.PORT

app.get("/", (req, res) =>
    res.send("<h1>The sample webpage is from https://freewebsitetemplates.com/forums/threads/zerotype-a-blank-canvas-template.20846/ </h1> The page is at /static/index.html"))

app.listen(port)