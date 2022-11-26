const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const port = 8080
const userRoute = require("./data/RoutesController.js")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.use("/user", userRoute)

app.listen(port, () => console.log("Server Running on Port " + port))
