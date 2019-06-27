import * as Koa from "koa";
import * as Router from "koa-router";
import * as path from 'path'
// import * as controllers from "./controllers/index";
import {loadController} from './decorator/index'
import 'reflect-metadata'
// console.log("controllers.Index", controllers.Index);
// function mapRoute(instance: Object,app:Koa){
//   const prototype = Object.getPrototypeOf(instance);
//   const methodsNames = Object.getOwnPropertyNames(prototype);
//   let router  = prototype.router;
//   let fn = prototype['xx'];
//   let method =(Reflect.getMetadata('method',fn) as string).toLowerCase()
//   let path = Reflect.getMetadata('path',fn)
//   console.log(fn)
//   console.log(method)
//   console.log(path)
//   router[`${method}`](`${path}`, fn)
//   console.log(router)
//   app.use(router.routes())
//   // app.use(prototype.router[Reflect.getMetadata('method',prototype['xx'])](Reflect.getMetadata('path',prototype['xx']),prototype['xx']))
// }

// console.log('getMetadata',Reflect.getMetadata('design:paramtypes',controllers.Index))
let app = new Koa();
loadController(path.join(__dirname,'./controllers'))(app)
// app.use(ctx => {
//   return (ctx.body = "123");
// });
// mapRoute(new controllers.Index(),app)
app.listen(3001, () => {
  console.log("3001 start");
});
