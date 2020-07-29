require('dotenv').config({path: 'confing.env'});
const express = require ('express');
const bodyParser = require ('body-parser');
const cookieParser = require('cookie-parser');
const monggoose = require('mongoose');

monggoose.connect(process.env.MONGO_URL)

const userRouter = require('./route/userRoute');
const loginRouter = require('./route/authRoute');
const productRouter = require('./route/productRoute');
const cartRouter = require('./route/cartRoute');

const authMiddleware = require('./middleware/auth.middleware');
const sessionMiddleware = require('./middleware/session.middleware');

const app = express();
const port = 3000;

app.use (bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cookieParser(process.env.SESSION_SERCRET));
app.use(express.static('public'));
app.use(sessionMiddleware);

app.set('view engine','pug');
app.set('views','./views');

app.get('/',function(req,res){
  res.render('index',{
    name:'Do Vinh Ha'
  });
})

app.use('/users',authMiddleware.authMiddleware,userRouter);
app.use('/authLogin',loginRouter);
app.use('/products',productRouter);
app.use('/cart',cartRouter);


app.listen(port,console.log(`${port} is running`));