const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  gmail : String,
  password : String,
  name : String
});

const accounts = mongoose.model('accounts',accountSchema,'accounts');

module.exports = accounts;