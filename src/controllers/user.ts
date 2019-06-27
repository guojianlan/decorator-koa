import { Controller, Get, Post } from "../decorator/index";
import * as Koa from "koa";
import { RouterContext } from "koa-router";
async function middleware1(
  ctx: Koa.ParameterizedContext,
  next: () => Promise<any>
) {
  ctx.xx = "12313213";
  await next();
}
@Controller("/user", {
  priority: 3
})
class User {
  @Get("/:id", { middlewares: [middleware1] })
  async index(ctx: RouterContext) {
    this.hehe();
    console.log(this);
    console.log(ctx.xx);
    return (ctx.body = "Controller_user_index");
  }
  hehe() {
    console.log("hehe");
  }
  @Get("/list")
  async getList(ctx: Koa.ParameterizedContext) {
    return (ctx.body = "Controller_user_getList");
  }
}
export = User;
