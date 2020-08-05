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
const mysqlConnecion = myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'correlativas'
}, 'single');
app.use(mysqlConnecion);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api',require('./middleware/token').validar);

//rutas

app.use('/api',require('./routes/materiasRoute'));
app.use('/api',require('./routes/carreraRoute'));
app.use('/api',require('./routes/dictaRoute'));
app.use('/api',require('./routes/correlativaRoute'));
app.use('/api',require('./routes/finalRoute'));
app.use('/apilogin',require('./routes/usuarioRoute'));
app.use('*', require('./middleware/httpsstatus').http404);

//ejecutamos el servidor
app.listen(app.get('port'), ()=>{
    console.log("Servidor alojado en el puerto: "+app.get('port'));
});