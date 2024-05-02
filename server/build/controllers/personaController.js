"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database/database"));
class PersonaController {
    index(req, res) {
        const query = 'DESCRIBE personas';
        (0, database_1.default)(query).then((result) => { res.json(result); }).catch((error) => { console.log(error); });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, database_1.default)(`INSERT INTO personas (nombre, apellido, localidad, nacimiento ) VALUES ( '${req.body.nombre}','${req.body.apellido}','${req.body.localidad}','${req.body.nacimiento}' ); `);
            res.json({ message: "Persona Agregada!!" });
        });
    }
}
const personaController = new PersonaController();
exports.default = personaController;
