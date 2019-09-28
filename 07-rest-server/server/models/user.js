const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'the name is necessary']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'mail is necessary']
  },
  password: {
    type: String,
    required: [true, 'the password is necessary']
  },
  img: {
    type: String,
    required: false
  },
  role: {
    type: String,
    default: 'USER_ROLE'
  },
  state: {
    type: Boolean,
    default: true
  },
  google: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('User', userSchema);
