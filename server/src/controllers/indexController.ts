import { Request, Response } from "express";
class IndexController{
	public index(req: Request, res: Response){
		res.json({message: "La api esta en /api/personas"});
	}
}
export const indexController = new IndexController();
