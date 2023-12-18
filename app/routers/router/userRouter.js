
const Router = require('koa-router');
const userController = require('../../controllers/userController')

let userRouter = new Router();

userRouter
  .post('/users/login', userController.Login)
  .post('/users/findUserName', userController.FindUserName)
  .post('/users/register', userController.Register)
  .post('/users/logout', userController.Logout);
module.exports = userRouter;