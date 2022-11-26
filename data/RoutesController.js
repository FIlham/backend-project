const express = require("express")
const router = express.Router()
const User = require("./UserController.js")

// endpoint untuk menambahkan user
router.post("/addUser", async (req, res) => {
  const userObj = {
    id: Date.now().toString(),
    ...req["body"]
  }
  const user = await User.addUser(userObj)
  return res.json(user)
})

// endpoint untuk mendapatkan data user
router.get("/getUser/:email", async (req, res) => {
  const userObj = { email: req.params.email }
  const user = await User.getUser(userObj)
  return res.json(user)
})

// endpoint untuk mengedit data user
router.patch("/editUser/:email", async (req, res) => {
  const userObj = { email: req.params.email }
  const dataNew = req.body
  const user = await User.editUser(userObj, dataNew)
  return res.json(user)
})

// endpoint untuk menghapus data user
router.delete("/deleteUser/:email", async (req, res) => {
  const userObj = { email: req.params.email }
  const user = await User.deleteUser(userObj)
  return res.json(user)
})

module.exports = router
