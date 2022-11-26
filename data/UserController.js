const DataController = require("./DataController.js")

// menambahkan user kedalam database
const addUser = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await DataController.check(user)
      if (checkUser) {
        // jika user telah ada/tersedia
        resolve({ status: false, message: "user has been available" })
      } else {
        if (!user.email) return { status: false, message: "user must be have a email" }
        DataController.add(user)
        .then(response => {
          resolve({ status: true, message: response })
        })
        .catch(error => {
          resolve({ status: false, message: error })
        })
      }
    } catch (error) {
      reject(error)
    }
  })
}

// mendapatkan data user melalui database
const getUser = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await DataController.check(user)
      if (checkUser) {
        DataController.get(user)
        .then(response => {
          resolve({ status: true, message: response })
        })
        .catch(error => {
          resolve({ status: false, message: error })
        })
      } else {
        resolve({ status: false, message: "user has not available" })
      }
    } catch (err) {
      reject(err)
    }
  })
}

// mengedit data user didalam database
const editUser = (user, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await DataController.check(user)
      if (checkUser) {
        DataController.edit(user, data)
        .then(response => {
          console.log(response)
          resolve({ status: true, message: response })
        })
        .catch(error => {
          resolve({ status: false, message: error})
        })
      } else {
        resolve({ status: false, message: "user has not available" })
      }
    } catch (error) {
      reject(error)
    }
  })
}

// menghapus data user di database
const deleteUser = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await DataController.check(user)
      if (checkUser) {
        DataController.delete(user)
        .then(response => {
          resolve({ status: true, message: response })
        })
        .catch(err => {
          resolve({ status: false, message: err})
        })
      } else {
        resolve({ status: false, message: "user has not available" })
      }
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  addUser,
  getUser,
  editUser,
  deleteUser
}
