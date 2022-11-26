const fs = require("fs")
const db = JSON.parse(fs.readFileSync("./data/database.json"))

// menambah data
exports.add = (data) => {
  return new Promise((resolve, reject) => {
    try {
      db.push(data)
      fs.writeFileSync("./data/database.json", JSON.stringify(db, null, 2))
      resolve("user has added")
    } catch (error) {
      reject(error)
    }
  })
}

// mengambil data
exports.get = (data) => {
  return new Promise((resolve, reject) => {
    try {
      const user = db.find(x => x.email == data.email)
      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
}

// mengecek data
exports.check = (data) => {
  return new Promise((resolve, reject) => {
    try {
      const user = db.find(x => x.email == data.email)
      resolve(user ? true : false )
    } catch (error) {
      reject(error)
    }
  })
}

// mengedit data
exports.edit = (old_data, new_data) => {
  return new Promise((resolve, reject) => {
    try {
      let old_user = db[db.findIndex(x => x.email == old_data.email)]
      old_user = Object.assign(old_user, new_data)
      fs.writeFileSync("./data/database.json", JSON.stringify(db, null, 2))
      resolve("user had updated")
    } catch (error) {
      reject(error)
    }
  })
}

// menghapus data
exports.delete = (data) => {
  return new Promise((resolve, reject) => {
    try {
      const iUser = db.findIndex(x => x.email == data.email)
      db.splice(iUser, 1)
      fs.writeFileSync("./data/database.json", JSON.stringify(db, null, 2))
      resolve("user has deleted")
    } catch (error) {
      reject(error)
    }
  })
}
