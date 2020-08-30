# CEFAI app

La aplicacion del cefai es una iniciativa para poder ofrecer herramientas para los estudiantes. Mostrar cosas de interes , utilidad y generar lazos entre los estudiantes y la univercidad. 

---

## Documentacion

En esta parte vamos a detallar como esta estructurado el sistema, para que su integracion en cualquier otro proyecto se mas sencialla o mas rapida de hacer.

### instalacion

Para poder instalar el sistema en local, o en un servidor, siga los siguientes pasos:

```sh
# clonamos el repositorio en un directorio
git clone https://github.com/francoZuniga32/CEFAIrest
cd CEFAIrest
# instalamos las dependencias
npm install
# ejecute el script de desarrollo o sino de produccion
npm run dev
# o
npm start
```

De esta manera le saldran algunos fallos el primero, no cuenta con una base de datos. En el siguiente [link](bd/README.md) se explica como hacer esta parte ademas de detalles tecnicos al respecto.

Luego de configurar la base de datos, puede iniciar el servidor y de esta manera podra probar el programa. Para probar el programa por primera vez, ingrese el usuario `admin@example.com` junto con la contrasela `admin` y podra testear por primera vez. (ojo en esta epata del proyecto no se encuentra una herramienta para la alta y la baja de usuario, en el link provisto sobre la bd se explica el mecanismo de encriptacion de contraseña, por lo cual cualquier cambio de momento se hace con una consulta SQL).

### Arquitectura del proyecto

```
/
|_ bd
|_ src
|  |_ controladores
|  |_ middleware
|  |_ publico
|  |_ rutas
|  |_ vistas
|  |_ index.js
|  |_ baseDeDatos.js
|  |_ claves.json
|_ package.json
```

`queda pendiente las traducciones` 

- [**bd**](bd.README.md) : es la estrutura de la base de datos, cuenta con un sql de la estrutura inicial, ademas de la documentacion sobre la base de datos.
- [**src**](src/READEME.md): es el archivo del proyecto en si, cuenta con la documentacion sobre el archivo de claves, index, etc'. Informacion general de las carpetas controladores, rutas, vistas, publico, middelware, etc'.
- [**controladores**](src/controladores/README.md): se encuentran los controladores de las rutas, son los archivos encargados de hacer consultas, gestionar usuario, renderizar las vistas, etc'.
- [**rutas**](src/rutas/README.md): se encuentran los archivos con las rutas, especificando o agrupandolas por grupos con significancia, de esta forma las ruras de materias son agrupadas en un archivo, etc'. indican que controlador usan ademas de el tipo de ruta (get, post), y que tipos de datos reciben como param.
- [**middelware**](src/middelware/README.md): contiene archivos que gestionan las sessiones, asi como los token de la api rest. de esta forma aislamos la logica de la validacion de usuario en un solo lugar en vez de tenes que importarla en cada uno de los controladores para ver si un usuario cuenta o no con una session.
- [**publico**](src/publico/README.md): se encuentran los recursos publicos para las vistas (estilos, scripts, etc).
- [**vistas**](src/vitas/README.md): se encuentran las vistas que usan un templete o plantilla de vistas, como lo seria ejs, que es el que se esta usando en este momento, la cantidad de codigo incrustado de js es poco, ya que se comenzo a usar vue js en las vistas del proyecto.
- **package.json**: es el archivo de configuracio del proyecto, si usted hiso un fork al proyecto, configure su package para que la direccion del repo sea la de su fork, de esta manera podra hacer su derivado de este proyecto.

ahora solo queda probar el proyecto y seguir avanzando.

---

## API REST

la api rest del cefai ofrece una forma de acceder a datos sobre materias, horarios, correlativas, finales, y demas. Para que se pueden usar en las distintas aplicaciones del cefai, como gestion de horarios, correlativas, etc'.

### Autenticación

Primero deberá solicitar un usuario, informando el por que lo solicita y con qué objetivo lo requiere (aplicación, investigación, etc). una vez hecho esto podrá consultar su token usando la siguiente ruta:

| Ruta                                    | Descripcion                                                  |
| --------------------------------------- | ------------------------------------------------------------ |
| /apilogin/usuario/:usuario/:contrasenia | se identifica al usuario con :usuario y :contrasenia, si el usuario esta en la base de datos, vamos a generarles un token para poder usar la aplicacion rest. |

Las rutas a continuación tendrán que hacer uso del token suministrado mediante un header de una consulta http, el cual se tendrá que llamar “access-token”. Una vez verificado el token usted podrá obtener los datos de su consulta.

### Consultas

las siguientes rutas se encuentran bajo la ruta inicial /api 

#### Carreras  

Datos sobre las carreras que se dictan.

| Ruta                             | Descripcion                                                  |
| -------------------------------- | ------------------------------------------------------------ |
| /carrera                         | Retorna datos sobre todas las carreras actuales (idCarrera, nombre, plan, duracion) |
| /carrera/id/:id                  | Donde :id es el id de la carrera a listar retorna los mismos datos que la anterior |
| /carrera/nombre/:nombre          | Donde :nombre es el nombre de la carrera a listar retorna los mismos datos que la anterior |
| /carrera/plan/:plan              | Donde :plan es el plan de la carrera a listar retorna los mismos datos que la anterior |
| /carrera/duracion/:duracion      | Donde :duracion es la duracion de la carrera a listar retorna los mismos datos que la anterior |
| /carrera/duracionmenor/:duracion | Listar los datos de la carreras con menor duracion que :duracion |
| /carrera/duracionmayor/:duracion | Lista los datos de las carreras con mayor duracion que :duracion |
| /carrera/buscar/:buscar          | Lista los datos de las carraras cuyo nombre o plan concidan con :buscar |

#### Materias

Datos sobre las materias.

| Ruta                                          | Descripcion                                                  |
| --------------------------------------------- | ------------------------------------------------------------ |
| /materia                                      | Lista todas las carreras                                     |
| /materia/id/:id                               | Lista la informacion de la materia cuyo id concida con :id   |
| /materia/nombre/:nombre                       | Lista las materias cuyo nombre coincida con :nombre          |
| /materia/anio/:anio                           | Lista las materias cuyo añio coincida con :anio              |
| /materia/cuatrimestre/:cuatrimestre           | Lista las materias cuyo cuatrimestre concida con :cuatrimestre |
| /materia/cuatrimestreanio/:cuatrimestre/:anio | Lista las materias cuyo cuatrimestre conincida con :cuatrimestre y año concida con :anio |

#### Dicta

Datos sobre los horarios de dictado de las materias

| Ruta                              | Descripcion                                                  |
| --------------------------------- | ------------------------------------------------------------ |
| /dicta                            | Lista todos los horarios de dictado                          |
| /dicta/idmateria/:idmateria       | Lista todos los horarios de dictado de la materia cuyo id es :id |
| /dicta/dia/:dia                   | Lista todos los horarios de dictado cuyo dia es :dia         |
| /dicta/estado/:estado             | Lista todos los horarios de dictado cuyo estado sea :estado (parcial, cancelado, normal) |
| /dicta/cuatrimestre/:cuatrimestre | Lista todos los horarios de dictado cuyo cuatrimestre sea :cuatrimestre |
| /dicta/hora/:hora                 | Lista todos los horarios de dictado cuya hora es :hora       |
| /dicta/horamenor/:hora            | Lista todos los horarios de dictado cuya hora es menor a :hora |
| /dicta/horamayor/:hora            | Lista todos los horarios de dictado cuya hora es mayor a :hora |

#### Correlativas

`Actualmente en mantenimiento` lista la informacion sobre las correlativas de las materias.

| Rutas                                                  | Descripcion                                                  |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| /correlativa                                           | Lista todas las correlativas                                 |
| /correlativa/:idcarrera/:idmateria                     | Listas las materias necesarias para cursar la materia cuyo id es :idmateria, y las disponibles para cursar la materia cuyo id es :idmateria, de la carrera :idcarrera |
| /correlativa/necesaria/:necesaria                      | Lista las materias necesarias para cursar la materia cuyo id es :id |
| /correlativa/disponible/:disponible                    | Lista las materias disponibles para cuersar la materia cuyo id es :id |
| /correlativa/carrera/:idcarrera                        | Lista las correlativas de las materias                       |
| /correlativa/carrera/disponible/:disponible/:idcarrera |                                                              |
| /correlativa/carrera/necesaria/:necesaria/:idcarrera   |                                                              |
| /correlativa/graf/                                     |                                                              |

#### Finales

Estas rutas retornan algo similar al anterior. El formato de los finales son :necesarias y :disponibles, donde :necesaria es el id de la materia cuyo final es necesario para cursar la materia cuyo id es :disponible

| Ruta                          | Descripcion                                                  |
| ----------------------------- | ------------------------------------------------------------ |
| /final                        | Retorna todos los finales en el formato necesario y disponible |
| /final/necesaria/:necesaria   | Retorna los finales de las materias que necesiten el final de la materia cuyo id coincide con :necesaria. |
| /final/disponible/:disponible | Retorna los finales de las materias cuyo id coincide con :diponible |
