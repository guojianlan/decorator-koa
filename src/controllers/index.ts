import { Controller, Get } from "../decorator/index";
import * as Koa from "koa";
import * as Router from 'koa-router'
async function middleware1(
  ctx: Koa.ParameterizedContext,
  next: () => Promise<any>
) {
  ctx.xx = "12313213";
  await next();
}
@Controller("", {
  priority: -20,
  middlewares: [middleware1]
})
class Index {
  @Get("/index")
  async index(ctx: Router.RouterContext) {
    console.log(ctx.xx);
    return (ctx.body = ctx.xx);
  }
  @Get("/list")
  async getlist(ctx: Koa.ParameterizedContext) {
    return (ctx.body = "list");
  }
}
export = Index;
