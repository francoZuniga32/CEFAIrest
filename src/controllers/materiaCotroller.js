const materiaController = {};
const pool = require('../database');

materiaController.complete = async (req, res)=>{
    var consultaMaterias = "SELECT DISTINCT * FROM materia";
    var consultaCarreras = "SELECT DISTINCT carrera.idCarrera FROM imparte, carrera WHERE imparte.idCarrera = carrera.idCarrera AND imparte.idMateria = ?";
    
    var materias = await pool.query(consultaMaterias);

    for (let i = 0; i < materias.length; i++) {
        const element = materias[i];
        element.carreras = await pool.query(consultaCarreras, [element.idMateria]);
    }

    res.json(materias);
};

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

materiaController.carrera = async (req, res) => {
    var consulta = "SELECT DISTINCT materia.* FROM materia, imparte WHERE materia.idMateria = imparte.idMateria AND imparte.idCarrera = ?";
    var idcarrera = req.params.idcarrera;
    var consultaCarreras = "SELECT DISTINCT carrera.idCarrera FROM imparte, carrera WHERE imparte.idCarrera = carrera.idCarrera AND imparte.idMateria = ?";
    
    var materias = await pool.query(consulta, [idcarrera]);

    for (let i = 0; i < materias.length; i++) {
        const element = materias[i];
        element.carreras = await pool.query(consultaCarreras, [element.idMateria]);
    }

    res.json(materias);
}

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