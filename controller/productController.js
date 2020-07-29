// const db = require('../db')
const product = require('../model/product.model');

module.exports.index = async function(req,res){
  // const page = parseInt(req.query.page)||1;
  // const perPage = 8;
  // const drop = (page-1)*perPage;
  // res.render('products/index',{
  //   products : db.get('products').drop(drop).take(perPage).value()
  // });
  const page = parseInt(req.query.page)||1;
  const perPage = 8;
  const skip = (page-1)*perPage;
  const products = await product.find().limit(perPage).skip(skip);
  res.render('products/index',{
     products : products
    });
}