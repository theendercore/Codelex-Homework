import { Response } from "express";


export function respond<T>(res: Response, code: number, data:T){
  res.status(code).send(data);
}