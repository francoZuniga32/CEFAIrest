const dictaController = {};
const pool = require('../database');

dictaController.all = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM dicta",(err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

dictaController.idmateria = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM dicta WHERE idMateria = ?",[req.params.idmateria], (err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

dictaController.dia = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM dicta WHERE dia = ? ",[req.params.dia],(err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

dictaController.cuatrimestre = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM dicta WHERE cuatrimestre = ? ",[req.params.cuatrimestre],(err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

dictaController.estado = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM dicta WHERE estado = ?", [req.params.estado],(err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

dictaController.hora = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM dicta WHERE hora = ?",[req.params.estado],(err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

dictaController.horamenor = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM dicta WHERE hora <= ? ", [req.params.hora],(err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

dictaController.horamayor = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM dicta WHERE hora >= ? ", [req.params.hora],(err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

dictaController.diaHora = async (req, res)=>{
    var dia = req.params.dia;
    var horainicio = req.params.hora;
    var consulta = "SELECT dicta.*, materia.nombre as nombremateria FROM dicta, materia, imparte, carrera WHERE materia.idMateria = dicta.idMateria AND materia.idMateria = imparte.idMateria AND imparte.idCarrera = carrera.idCarrera AND dicta.dia = ? AND dicta.horafin > ? ORDER BY horainicio ASC";
    var consultaFinales = "SELECT DISTINCT imparte.idCarrera FROM imparte WHERE imparte.idMateria = ? ";

    var horario = await pool.query(consulta, [dia, horainicio]);

    for (let i = 0; i < horario.length; i++) {
        const element = horario[i];
        element.carreras = await pool.query(consultaFinales, [element.idMateria]);
    }

    console.log(horario);
    res.json(horario);
}

module.exports = dictaController;