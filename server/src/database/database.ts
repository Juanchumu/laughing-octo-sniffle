import mysql, { Pool, PoolConnection } from 'promise-mysql';
import keys from './keys';

const pool = (query: string): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    let connection: PoolConnection;
    mysql
      .createPool(keys.database)
      .then((mysqlPool: Pool) => mysqlPool.getConnection())
      .then((conn: PoolConnection) => {
        connection = conn;
        console.log("Conexion Abierta: ", query);
        return connection.query(query);
      })
      .then((result: any) => {
        console.log("Query executed successfully");
        connection.release();
        console.log("Conexion Cerrada.");
        resolve(result);
      })
      .catch((error: Error) => {
        console.error("Ha ocurrido un error: ", error);
        if (connection) {
          connection.release();
        }
        reject(error);
      });
  });
};



export default pool;
