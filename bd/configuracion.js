//se crea o configura la base de datos inicial
//de forma que se creen la base de datos desde un script de npm configurando un json con la estructura de la base de datos.
fs = require('fs');
const path = require('path');
const readline = require('readline');

//configuraciones
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
path.basename(__dirname);

//abrimos el json de claves
var claves = JSON.parse(fs.readFileSync(path.join(__dirname,'../src', 'claves.json')).toString());

console.log(`Biemvenido a la configuracion de la base de datos:`);

//solicitamos el usuario, contraseña y pueto por defecto
rl.question('usuario de MySQL:  ', (usuario) => {
    // TODO: Log the answer in a database
    var usuarioIngresado = usuario;
    rl.question('ingrese el host: ', (host) => {
        var hostIngresado = host;

        rl.question('contraseña del usuario ingresado: ', (contrasenia) => {
            var contraseniaIngresado = contrasenia;
            claves.database.user = usuarioIngresado;
            claves.database.host = hostIngresado;
            claves.database.pass = contraseniaIngresado;

            console.log(`Revise los datos ingresados: `);
            console.log(claves.database);

            rl.question("¿los datos ingresados son correctos? s/n \n", (validado)=>{
                console.log(validado.toUpperCase);
                if(validado.toUpperCase == 'S'){
                    fs.writeFile(path.join(__dirname, '../src', 'claves.json'), JSON.stringify(claves), (err, file)=>{
                        if(err){
                            console.log(err);
                        }
                    });
                }else{
                    console.log('vuelva a ejecutar npm run config: ');
                }
                rl.close();
            });
        })
    });
});
