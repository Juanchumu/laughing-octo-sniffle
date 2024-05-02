import { Request, Response } from "express";
import pool from '../database/database';

class PersonaController { 
	public index(req: Request, res: Response){
		const query = 'DESCRIBE personas';
		pool(query).then(
			(result) => { res.json(result);}
		).catch(
		(error) => {console.log(error);}
		);
	}

	//{
    //"nombre": "Lorem",
    //"apellido": "Ipsum",
    //"localidad": "en Lorem",
    //"nacimiento": "0000-00-00 00:00:01"
	//}



	//Peticion POST 
	public async create(req: Request, res: Response): Promise<void>{
		await pool(`INSERT INTO personas (nombre, apellido, localidad, nacimiento ) VALUES ( '${req.body.nombre}','${req.body.apellido}','${req.body.localidad}','${req.body.nacimiento}' ); `);
		res.json({message: "Persona Agregada!!"});
	}

	//Peticion DELETE
	public async delete(req: Request, res: Response): Promise<void>{
		const  { id } = req.params; 
		await pool( `DELETE FROM personas where id = ${id};` );
		res.json({ message: `La persona con id = ${id} fue borrada.` });
	}
	//Peticion UPDATE 
	public async update(req: Request, res: Response): Promise<void>{
		const  { id } = req.params; 
		await pool( `UPDATE personas SET nombre ="${req.body.nombre}",  apellido ="${req.body.apellido}", localidad ="${req.body.localidad}", nacimiento ="${req.body.nacimiento}" WHERE id = ${id}; ` );
		res.json({ message: `La persona con id = ${id} fue actualizada.` });
	}

	//Peticion GET
	public async get_list( req: Request, res: Response){
		const personas = await pool(`SELECT * FROM personas`);
		res.json(personas);
	}

	//Peticion GET con id  para pedir un solo registro en particular
	public async get_list_one( req: Request, res: Response){
		const { id } = req.params;
		const personas = await pool(`SELECT * FROM personas WHERE id = ${id}`);
		if(personas.length > 0){
			return res.json(personas[0]);
		}
		else{
			res.status(404).json({message: `Persona con id = ${id} no encontrada`});
		}
	}


}

const personaController = new PersonaController();

export default personaController;
