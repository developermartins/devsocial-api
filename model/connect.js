import * as dotenv from 'dotenv';
import mysql from "mysql2/promise";

dotenv.config();

export const connection = mysql.createPool({
     host: process.env.DB_HOST,
     port: process.env.DB_PORT,
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     database: process.env.DATABASE,
     waitForConnections: true,
     connectionLimit: 10,
     queueLimit: 0,
})
