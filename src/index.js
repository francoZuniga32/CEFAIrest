const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const url=require('url');
const jwt = require('jsonwebtoken');

const config = require('./config.json');

const app = express();

//exportamos rutas

const materiaRoute = require('./routes/materiasRoute');

//cabezeras cors
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//configuraciones
app.set('port',process.env.port || 3000);
app.set('key', config.clave);

//midelwares
app.use(morgan('dev'));
app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'correlativas'
}, 'single'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('./midelwares/token').validar);


//rutas

app.use(require('./routes/materiasRoute'));
app.use(require('./routes/carreraRoute'));
app.use(require('./routes/dictaRoute'));
app.use(require('./routes/correlativaRoute'));
app.use(require('./routes/finalRoute'));

//ejecutamos el servidor
app.listen(app.get('port'), ()=>{
    console.log("Servidor alojado en el puerto: "+app.get('port'));
});