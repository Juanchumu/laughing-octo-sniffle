"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const personaRoutes_1 = __importDefault(require("./routes/personaRoutes"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// import routes 
class Server {
    costructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        //si hay un puerto, tomalo
        //esto se edita si se sube a la nube 
        this.app.set('port', 3000);
        //this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/personas', personaRoutes_1.default);
    }
    start() {
        console.log(this.app.get('port'));
        this.app.listen(this.app.get('port'), () => {
            console.log('Server en el puerto:', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
