
# CEFAI rest
aplicacion rest que sirve muestra los horarios y las correlatividades de las meterias, fue construida con el fin de podes solucionar el problema de consultar horarios y ademas poder consultar las correlatividades.

Todas las rutas tienen el dominio: http://cefai.fi.uncoma.edu.ar/

## Horarios
ruta: http://cefai.fi.uncoma.edu.ar/horarios
| ruta | parametros | query| status | retorno |
|--|--|--|--| -- |
| / | none | dia, horainicio, horafin, cuatrimestre| 200 | Array|
| /carrera/:carrera/anio/:anio| :carrera el id de una carrera, :anio el año de la carrera| none (f1)|200|Array|
|/materia/:id|:id es el id de una materia| none (f1)|200|Array|

querys (parametros get):
dia: es el un dia de la semana (lunes, martes, miercoles, jueves, viernes, sabado)
horainicio: es un string con el formato hh:mm de la hora en la que comienza una clase.
horafin: es un string con el formato hh:mm de la hora de finalizacion de la clase.
cuatrimestre: toma el valor de 1 o 2 e indica el cuatrimestre de la materia.
Ej: ruta: http://cefai.fi.uncoma.edu.ar/horarios?dia=mates&cuatrimestre=2&horafin=19:00

f(1) falta agregar las fucionalidad de consultar parametros en los otros horarios.
