const materiaController = {};
const pool = require('../database');

materiaController.all = (req, res) => {
    pool.query("SELECT * FROM materia ", (err, materias) => {
        if (err) {
            res.json(err);
        }
        res.json(materias);
    });
}

materiaController.id = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM materia WHERE idMateria = ?", [req.params.id], (err, materias) => {
            if (err) {
                res.json(err);
            }
            res.json(materias);
        });
    });
}

materiaController.nombre = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM materia WHERE nombre LIKE ? ", ['%' + req.params.nombre + '%'], (err, materias) => {
            if (err) {
                res.json(err);
            }
            res.json(materias);
        });
    });
}

materiaController.anio = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM materia WHERE ano = ? ", [req.params.anio], (err, materias) => {
            if (err) {
                res.json(err);
            }
            res.json(materias);
        });
    });
};

materiaController.cuatrimestre = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM materia WHERE cuatrimestre = ? ", [req.params.cuatrimestre], (err, materias) => {
            if (err) {
                res.json(err);
            }
            res.json(materias);
        });
    });
};

materiaController.cuatrimestreanio = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM materia WHERE cuatrimestre = ? AND ano = ?", [req.params.cuatrimestre, req.params.anio], (err, materias) => {
            if (err) {
                res.json(err);
            }
            res.json(materias);
        });
    });
};

materiaController.carreraAnio = (req, res)=>{
    var consulta = "SELECT DISTINCT materia.* FROM materia, imparte WHERE imparte.idMateria = materia.idMateria AND imparte.idCarrera = ? AND materia.ano = ?";
    var idcarrera = req.params.idcarrera;
    var anio = req.params.anio;

    pool.query(consulta, [idcarrera,anio], (err, materias)=>{
        if(err){
            console.log(err);
        }
        res.json(materias);
    });
};

module.exports = materiaController;