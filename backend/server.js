import express from "express"
import {PORT} from "./config.js"

const app = express()

app.get("/", (req, res) => {
    res.status(200).send("Hello world")
})

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`)
})