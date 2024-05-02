import { Router } from "express";
import personaController from '../controllers/personaController';

class PersonaRoutes {
	public router: Router = Router();
	constructor(){
		this.config();
	}
	config(): void {
		//Publicar una persona en DB
		this.router.post('/', personaController.create);
		//this.router.get('/', personaController.create);
		//this.router.get('/:id', personaController.create);
		//this.router.delete('/:id', personaController.create);
		//this.router.put('/:id', personaController.create);
	}
}
const personaRoutes = new PersonaRoutes();

export default personaRoutes.router;
