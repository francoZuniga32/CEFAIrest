const sreController = {};
const pool = require('../database');

sreController.jsonMaterias = async (req, res)=>{
    var consultaCarreras = "SELECT DISTINCT * FROM carrera";
    var consutaMaterias = "SELECT DISTINCT materia.* FROM materia, imparte WHERE imparte.idMateria = materia.idMateria AND imparte.idCarrera = ? AND materia.ano = ? ORDER BY materia.cuatrimestre ASC";
    var json = {};
    var carreras = await pool.query(consultaCarreras);
    json.carreras = carreras;
    //ahora creamos la estructura de las materias
    var materias = [];

    for (let i = 0; i < carreras.length; i++) {
        const carrera = carreras[i];
        var materiasCarrera = [];
        for(var j = 1; j <= carrera.duracion; j++){
            var materiasAnio = [];
            var materiasAnio = await pool.query(consutaMaterias,[carrera.idCarrera, j]);
            materiasCarrera.push(materiasAnio);
        }
        materias.push(materiasCarrera);
    }

    json.materias = materias;
    res.json(json);
}

module.exports = sreController;