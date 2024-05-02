import express, {Application} from 'express';
import personaRoutes from './routes/personaRoutes';
import indexRoutes from './routes/indexRoutes';
import morgan from 'morgan';
import cors from 'cors';
// import routes 



class Server {
	public app: Application;
	costructor(){
		this.app = express();
		this.config();
		this.routes();
	}
	config(): void {
		//si hay un puerto, tomalo
		//esto se edita si se sube a la nube 
		this.app.set('port', 3000);
		//this.app.set('port', process.env.PORT || 3000);
		this.app.use(morgan('dev'));
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({extended: false}));
	}
	routes(): void {
		this.app.use('/', indexRoutes );
		this.app.use('/api/personas', personaRoutes );
	}
	start(): void {
		console.log(this.app.get('port'));
		this.app.listen(
			this.app.get('port'),
			() => {
				console.log('Server en el puerto:', this.app.get('port'))
			}

		);
	}
}

const server =  new Server();


server.start();
