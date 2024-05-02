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
		this.router.delete('/:id', personaController.delete);
		this.router.put('/:id', personaController.update);
		this.router.get('/', personaController.get_list);
		this.router.get('/:id', personaController.get_list_one);
	}
}
const personaRoutes = new PersonaRoutes();

export default personaRoutes.router;
