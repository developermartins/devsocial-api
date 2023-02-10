import mysql from "mysql";

export const db = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'devmarts@MartsDev2230',
     database: 'social'
})
