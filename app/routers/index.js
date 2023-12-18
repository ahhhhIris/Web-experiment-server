
const Router = require('koa-router');

let Routers = new Router();

const userRouter = require('./router/userRouter');
const productRouter = require('./router/productRouter');
const shoppingCartRouter = require('./router/shoppingCartRouter');
const orderRouter = require('./router/orderRouter');

Routers.use(userRouter.routes());
Routers.use(productRouter.routes());
Routers.use(shoppingCartRouter.routes());
Routers.use(orderRouter.routes());

module.exports = Routers;