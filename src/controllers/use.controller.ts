import { json, request, Request,response,Response } from "express";

export class useController{
    getUsers(req:Request,res:Response){
        res.status(200).json({
            user:"Mario Barrera",

        });
    }
}