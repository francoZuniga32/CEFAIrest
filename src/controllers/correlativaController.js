const correlativaController = {};
const pool = require('../database');

correlativaController.all = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM correlativa ",(err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

correlativaController.necesaria = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM correlativa WHERE correlativa.necesaria = ? ",[req.params.necesaria], (err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

correlativaController.disponible = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM correlativa WHERE correlativa.disponible = ? ", [req.params.disponible],(err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

correlativaController.carrera = (req, res)=>{
    req.getConnection((err, conn)=>{
        pool.query("SELECT * FROM correlativa, imparte, materia WHERE correlativa.necesaria = imparte.idMateria AND correlativa.disponible = materia.idMateria AND imparte.idCarrera = ? ", [req.params.idcarrera],(err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

correlativaController.carreranecesaria = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM correlativa, imparte, materia WHERE correlativa.necesaria = imparte.idMateria AND correlativa.disponible = materia.idMateria AND imparte.idCarrera = ?  AND correlativa.necesaria = ?", [req.params.idcarrera, req.params.necesaria],(err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

correlativaController.carreradisponible = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT correlativa.necesaria, correlativa.disponible FROM correlativa, imparte WHERE correlativa.necesaria = imparte.idMateria AND correlativa.disponible AND imparte.idCarrera = ? AND correlativa.disponible = ?", [req.params.idcarrera, req.params.disponible],(err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

correlativaController.correlativamateria = async (req, res) => {
    var consultaNecesarias = "SELECT materia.idMateria, materia.nombre, materia.cuatrimestre, materia.ano FROM materia, imparte, correlativa WHERE materia.idMateria = correlativa.necesaria AND materia.idMateria = imparte.idMateria AND imparte.idCarrera = ? AND correlativa.disponible = ?"
    var consultaDisponibles = "SELECT materia.idMateria, materia.nombre, materia.cuatrimestre, materia.ano FROM materia, imparte, correlativa WHERE materia.idMateria = correlativa.disponible AND materia.idMateria = imparte.idMateria AND imparte.idCarrera = ? AND correlativa.necesaria = ?";
    var consultaFinales = "SELECT materia.nombre FROM materia, final WHERE materia.idMateria = final.necesaria AND final.disponible = ?";
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