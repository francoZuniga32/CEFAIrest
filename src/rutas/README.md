# Rutas

---

Algunas de las rutas seran detalladas aqui.

## Administracion

En estas rutas se renderiza la informacion para los que son administradores del sistema,ya sean profesores o parte del departamento academico de una instirucion. En esta seccion se podra construir toda una infrastrutura de datos sobre los cuales trabajar.

| Rutas                                                        | Descripcion                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| /administracion/                                             | Es la ruta inicial de la parte de administracion. Se renderiza el home de una persona |
| /administracion/carreras                                     | Es la ruta de administracion de carreras,se renderiza las opciones de edicion de una carrera funciones CRUD. |
| /administracion/correlativas                                 | Es la ruta de administracion de correlativas,funcionalidades CRUD. |
| /administracion/materias                                     | Es la ruta de administracion de materias,funcionalidades CRUD. |
| /administracion/horarios                                     | Es la ruta de administracion de horarios,funcionalidades CRUD. |
| /administracion/horarios/horarios/carreraaniocuatrimestre/:idcarrera/:anio/:cuatrimestre | Retorna los horarios de una :idcarrera proporsionada,un :anio y un :cuatrimestre suministrado. |
| /administrar/carreras/carreras                               | Lista las carreras que se encuentran cargadas.               |
| /administrar/materias/materias                               | Lista las materias que se encuentran cargadas.               |
| /administrar/correlativas/correlativas                       | Lista las correlativas que se encuentran cargadas.           |

Como esta parte se encuentra actualemente en desarrollo,muchas de las rutas cambiaran mucho.

## Index

Estas rutas son las que ve el usuario final,sin necesidad de tener un usuario registrado en el sistema. muetra horarios,correlatvas,etc'.

| Ruta                                                | Descripcion                                                  |
| --------------------------------------------------- | ------------------------------------------------------------ |
| /                                                   | Es la pagina principal donde se muestra informacion sobre la institucion,en este caso el CEFAI Centro de Estudiantes Factultad de Informatica |
| /correlativas                                       | Es el fomulario de consulta de correltivas,de esta menera alguien podra consultar sobre el regimen de cursado de una materia |
| /horarios                                           | Es la grilla de horarios del dia corriente,muestra los horarios del dia de hoy (el cual es el de la pc),en tiempo real (que se esta cursando ahora en adelante,cuales clases se encuentran activas,etc'). |
| /horarios/misemana                                  | En este lugar uno puede consultar sobre las materias que cursa y de esta manera poder armar sus horarios semanales. |
| /horarios/horarios/materia/:idmateria/:cuatrimestre | Lista los horarios de una materia en un cuatrimestre dado,ya que es necesario para arma los horarios semanales. |
| /horarios/consulta/:dia/:hora/:cuatrimestre         | Lista los horarios del dia,y cuatrimestre suministrado que cuya hora de inicio sea mayor o igual a la hora sumistrada. |
| /correlativas/consulta/:idcarrera/:idmateria        | Lista las correlativas de una materia suministrada.          |
| /login                                              | Renderiza las vistas del login.                              |
| /loginvalidate                                      | Valida al usuario,si es asi crea un session sino,retorna a este el login. |

## Rutas REST

