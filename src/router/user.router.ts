import { useController } from "../controllers/use.controller";
import { BaseRouter } from "./router";

export class userRouter extends BaseRouter<useController>{
    constructor(){
        super(useController)
    }
    routes():void{
        this.router.get('/user',(req,res)=>this.controller.getUsers(req,res))
    }
}