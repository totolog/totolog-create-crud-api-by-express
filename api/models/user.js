// express_crud/api/models/user.js

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('User', UserSchema)