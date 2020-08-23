# CEFAI app

La aplicacion del cefai es una iniciativa para poder ofrecer herramientas para los estudiantes. Mostrar cosas de interes , utilidad y generar lazos entre los estudiantes y la univercidad. 

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
