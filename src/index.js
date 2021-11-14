const express = require("express");
const sequelize = require("./databases/models/index");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const session = require("express-session");

/**
 * Configuraciones,y CORS
 */
path.basename(__dirname);
const app = express();
app.set("PORT",3000);
app.use(
    session({
        secret: "keyboard cat",          
        resave: false,          
        saveUninitialized: true,          
        cookie: { secure: true },          
    })
);
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("key",process.env.CLAVE);
app.set("public",path.join(__dirname,"public"));
app.use("/static",express.static(app.get("public")));
console.log(app.get("public"));
app.set('view engine','ejs');

app.use(cors());

app.use('/carreras',require('./app/carrera/ruta'));
app.use('/materias',require('./app/materia/ruta'));
app.use('/final',require('./app/final/ruta'));
app.use('/horarios',require('./app/horario/ruta'));

//ejecutamos el servidor
app.listen(app.get("PORT"),() => {
    console.log("listen to port " + app.get("PORT"));
});