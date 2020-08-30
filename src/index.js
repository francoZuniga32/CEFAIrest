const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const session = require('express-session');
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
path.basename(__dirname);
app.set('views', path.join(__dirname, 'vistas'));
app.set('view engine', 'ejs');
app.set('publico', path.join(__dirname, 'publico'));

app.use(express.static(path.join(__dirname, 'publico')));

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
app.use(session({
    secret: 'asdasdasdasdasd'
}));

//rutas

app.use('/', require('./rutas/indexrender'));

//rutas api
app.use('/api',require('./rutas/materiasRoute'));
app.use('/api',require('./rutas/carreraRoute'));
app.use('/api',require('./rutas/dictaRoute'));
app.use('/api',require('./rutas/correlativaRoute'));
app.use('/api',require('./rutas/finalRoute'));
app.use('/administrar', require('./rutas/administrarRoute'));
app.use('/sre', require('./rutas/sre'));
app.use('/apilogin',require('./rutas/usuarioRoute'));
app.use('*', require('./middleware/httpsstatus').http404);

//ejecutamos el servidor
app.listen(app.get('port'), ()=>{
    console.log("Servidor alojado en el puerto: "+app.get('port'));
});