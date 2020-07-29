// const db = require('../db');
const products = require('../model/product.model');

module.exports.cart = function(req,res){
  const sessionId = req.signedCookies.sessionId;
  const sessions = db.get('sessions').find({id:sessionId}).value();
  const cart = sessions.cart;
  const products = [];
  for(var val in cart){
    const product = db.get('products').find({id:val}).value();
    if(product){
      products.push({
        product:product,
        amount:cart[val]
      })
    }
  }
  res.render('cart/index',{
    products
  });
}

module.exports.addToCart = function(req,res){
  const productId = req.params.productId;
  const sessionId = req.signedCookies.sessionId;

  if(!sessionId){
    res.redirect('/products');
  }

  const count = db.get('sessions')
    .find({id:sessionId})
    .get('cart.'+productId,0)
    .value();

  db.get('sessions')
    .find({id:sessionId})
    .set('cart.'+productId,count +1)
    .write();
  res.redirect('/products');
}