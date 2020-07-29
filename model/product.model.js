const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name : String,
  image : String,
  desciption : String
});

const products = mongoose.model('products',userSchema,'products');

module.exports = products;