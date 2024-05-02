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
	public async create(req: Request, res: Response): Promise<void>{
		await pool(`INSERT INTO personas (nombre, apellido, localidad, nacimiento ) VALUES ( '${req.body.nombre}','${req.body.apellido}','${req.body.localidad}','${req.body.nacimiento}' ); `);
		res.json({message: "Persona Agregada!!"});
	}


}

const personaController = new PersonaController();

export default personaController;
