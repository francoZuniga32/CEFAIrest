const mysql = require('mysql');
const util = require('util');
const fs = require('fs');
const path = require('path');

const database = JSON.parse(fs.readFileSync(path.join(__dirname, 'claves.json')).toString());

const pool = mysql.createPool(database.database);

pool.getConnection((err, conn)=>{
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error("LA CONECCION CON LA BASE DE DATOS FUE CERRADA!!");
        }
        if(err.code === 'ER_COUNT_ERROR'){
            console.error("");
        }
        if(err.code === 'ECONNREFUSED'){
            console.error("LA CONECCION CON LA BASE DE DATOS FUE RECHAZADA");
        }
    }
    if(conn){
        conn.release();
        console.log('la base de datos fue conectada!!');
        return;
    }
});

//ahora las cueris pueden usar promesas
pool.query = util.promisify(pool.query);

module.exports = pool;