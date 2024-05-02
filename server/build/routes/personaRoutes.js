"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personaController_1 = __importDefault(require("../controllers/personaController"));
class PersonaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Publicar una persona en DB
        this.router.post('/', personaController_1.default.create);
        //this.router.get('/', personaController.create);
        //this.router.get('/:id', personaController.create);
        //this.router.delete('/:id', personaController.create);
        //this.router.put('/:id', personaController.create);
    }
}
const personaRoutes = new PersonaRoutes();
exports.default = personaRoutes.router;
