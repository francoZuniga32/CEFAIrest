const correlativaController = {};
const pool = require('../database');
const { json } = require('body-parser');

correlativaController.all = (req, res)=>{
    pool.query("SELECT * FROM correlativa ",(err, correlativa)=>{
        if(err){
            res.json(err);
        }
        res.json(correlativa);
    });
};

correlativaController.complete = async (req, res) => {
    var consultaNecesaria = "SELECT DISTINCT materia.nombre as nombreNecesaria, correlativa.necesaria FROM correlativa, materia WHERE materia.idMateria = correlativa.necesaria"
    var consultaDisponibles = "SELECT DISTINCT materia.nombre as nombreDisponible FROM correlativa, materia WHERE materia.idMateria = correlativa.disponible AND correlativa.necesaria = ?";
    var consultaFinales = "SELECT DISTINCT carrera.idCarrera FROM carrera ,imparte WHERE carrera.idCarrera = imparte.idCarrera AND imparte.idMateria = ?";

    var correlativas = await pool.query(consultaNecesaria);

    for (let i = 0; i < correlativas.length; i++) {
        var element = correlativas[i];
        element.nombreDisponible = await pool.query(consultaDisponibles, [element.necesaria]);
        element.carreras = await pool.query(consultaFinales, [element.necesaria]);
    }

    res.json(correlativas);
}

correlativaController.necesaria = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM correlativa WHERE correlativa.necesaria = ? ",[req.params.necesaria], (err, correlativa)=>{
            if(err){
                res.json(err);
            }
            res.json(correlativa);
        });
    })
};

correlativaController.disponible = (req, res)=>{
    pool.query("SELECT * FROM correlativa WHERE correlativa.disponible = ? ", [req.params.disponible],(err, correlativa)=>{
        if(err){
            res.json(err);
        }
        res.json(correlativa);
    });
};

correlativaController.carrera = (req, res)=>{
    pool.query("SELECT * FROM correlativa, imparte, materia WHERE correlativa.necesaria = imparte.idMateria AND correlativa.disponible = materia.idMateria AND imparte.idCarrera = ? ", [req.params.idcarrera],(err, correlativa)=>{
        if(err){
            res.json(err);
        }
        res.json(correlativa);
    });
};

correlativaController.carreranecesaria = (req, res)=>{
    pool.query("SELECT * FROM correlativa, imparte, materia WHERE correlativa.necesaria = imparte.idMateria AND correlativa.disponible = materia.idMateria AND imparte.idCarrera = ?  AND correlativa.necesaria = ?", [req.params.idcarrera, req.params.necesaria],(err, correlativa)=>{
        if(err){
            res.json(err);
        }
        res.json(correlativa);
    });
};

correlativaController.carreradisponible = (req, res)=>{
    pool.query("SELECT correlativa.necesaria, correlativa.disponible FROM correlativa, imparte WHERE correlativa.necesaria = imparte.idMateria AND correlativa.disponible AND imparte.idCarrera = ? AND correlativa.disponible = ?", [req.params.idcarrera, req.params.disponible],(err, correlativa)=>{
        if(err){
            res.json(err);
        }
        res.json(correlativa);
    });
};

correlativaController.correlativamateria = async (req, res) => {
    var consultaNecesarias = "SELECT DISTINCT materia.idMateria, materia.nombre, materia.cuatrimestre, materia.ano FROM materia, imparte, correlativa WHERE materia.idMateria = correlativa.necesaria AND materia.idMateria = imparte.idMateria AND imparte.idCarrera = ? AND correlativa.disponible = ?"
    var consultaDisponibles = "SELECT DISTINCT materia.idMateria, materia.nombre, materia.cuatrimestre, materia.ano FROM materia, imparte, correlativa WHERE materia.idMateria = correlativa.disponible AND materia.idMateria = imparte.idMateria AND imparte.idCarrera = ? AND correlativa.necesaria = ?";
    var consultaFinales = "SELECT DISTINCT materia.nombre FROM materia, final WHERE materia.idMateria = final.necesaria AND final.disponible = ?";
    var idcarrera = req.params.idcarrera;
    var idmateria = req.params.idmateria;
    var retorno = {};

    const necesarias = await pool.query(consultaNecesarias, [idcarrera, idmateria]);
    for (let i = 0; i < necesarias.length; i++) {
        const element = necesarias[i];
        var finales =  await pool.query(consultaFinales, [element.idMateria]);
        element.finales = finales;
    }

    const disponibles = await pool.query(consultaDisponibles, [idcarrera, idmateria]);
    for (let j = 0; j < disponibles.length; j++) {
        const element = disponibles[j];
        var finales = await pool.query(consultaFinales, [element.idMateria]);
        element.finales = finales;
    }

    retorno.necesarias = necesarias;
    retorno.disponibles = disponibles;
    res.json(retorno);
};

correlativaController.graf = async (req, res)=>{
    var data = [];
    materias = await pool.query("SELECT correlativa.necesaria, correlativa.disponible FROM correlativa, imparte WHERE correlativa.necesaria = imparte.idMateria AND correlativa.disponible AND imparte.idCarrera = '2' ");
    materias.forEach(element => {
        data.push({ from : element['necesaria'], to: element['disponible']});
    });
    res.json(data);
};

module.exports = correlativaController;