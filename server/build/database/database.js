"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = (query) => {
    return new Promise((resolve, reject) => {
        let connection;
        promise_mysql_1.default
            .createPool(keys_1.default.database)
            .then((mysqlPool) => mysqlPool.getConnection())
            .then((conn) => {
            connection = conn;
            console.log("Conexion Abierta: ", query);
            return connection.query(query);
        })
            .then((result) => {
            console.log("Query executed successfully");
            connection.release();
            console.log("Conexion Cerrada.");
            resolve(result);
        })
            .catch((error) => {
            console.error("Ha ocurrido un error: ", error);
            if (connection) {
                connection.release();
            }
            reject(error);
        });
    });
};
exports.default = pool;
