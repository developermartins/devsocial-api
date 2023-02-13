import mysql from "mysql2/promise";

export const connection = mysql.createPool({
     host: 'localhost',
     port: 3306,
     user: 'root',
     password: 'devmarts@MartsDev2230',
     database: 'social',
     waitForConnections: true,
     connectionLimit: 10,
     queueLimit: 0,
})
