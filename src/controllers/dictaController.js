const dictaController = {};
const pool = require('../database');

dictaController.all = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM dicta, materia WHERE materia.idMateria = dicta.idMateria",(err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

dictaController.idmateria = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM dicta, materia WHERE materia.idMateria = dicta.idMateria AND dicta.idMateria = ?",[req.params.idmateria], (err, materias)=>{
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
    var consulta = "SELECT dicta.*, materia.nombre as nombremateria FROM dicta, materia WHERE materia.idMateria = dicta.idMateria AND dicta.dia = ? AND dicta.horafin > ? ORDER BY horainicio ASC";
    var consultaFinales = "SELECT DISTINCT imparte.idCarrera FROM imparte WHERE imparte.idMateria = ? ";

    var horario = await pool.query(consulta, [dia, horainicio]);

    for (let i = 0; i < horario.length; i++) {
        const element = horario[i];
        element.carreras = await pool.query(consultaFinales, [element.idMateria]);
    }

    console.log(horario);
    res.json(horario);
}

dictaController.administrar = async (req, res)=>{
    var consultaDicta = "SELECT DISTINCT * FROM dicta, materia WHERE dicta.idMateria = materia.idMateria";
    var consultaFinales = "SELECT DISTINCT carrera.idCarrera FROM carrera, imparte WHERE carrera.idCarrera = imparte.idCarrera AND imparte.idMateria = ?";

    var dicta = await pool.query(consultaDicta);

    for (let i = 0; i < dicta.length; i++) {
        var element = dicta[i];
        element.carreras = await pool.query(consultaFinales, [element.idMateria]);
    }

    res.json(dicta);
}

dictaController.carrera = async (req, res) => {
    var consulta = "SELECT DISTINCT dicta.*  FROM dicta, imparte , materia WHERE dicta.idMateria = imparte.idMateria AND dicta.idMateria = materia.idMateria AND imparte.idCarrera = ?";
    var consultaFinales = "SELECT DISTINCT carrera.idCarrera FROM carrera, imparte WHERE carrera.idCarrera = imparte.idCarrera AND imparte.idMateria = ?";
    var idcarrera = req.params.idcarrera;
    
    var dicta = await pool.query(consulta, [idcarrera] );

    for (let i = 0; i < dicta.length; i++) {
        var element = dicta[i];
        element.carreras = await pool.query(consultaFinales, [element.idMateria]);
    }

    console.log(dicta);

    res.json(dicta);
};

dictaController.diaCarrera = async (req, res)=>{
    var consulta = "SELECT DISTINCT dicta.*  FROM dicta, imparte , materia WHERE dicta.idMateria = imparte.idMateria AND dicta.idMateria = materia.idMateria AND imparte.idCarrera = ? AND dicta.dia = ?";
    var consultaFinales = "SELECT DISTINCT carrera.idCarrera FROM carrera, imparte WHERE carrera.idCarrera = imparte.idCarrera AND imparte.idMateria = ?";
    var idcarrera = req.params.idcarrera;
    var dia = req.params.dia;

    var dicta = await pool.query(consulta, [idcarrera, dia]);
    for (let i = 0; i < dicta.length; i++) {
        var element = dicta[i];
        element.carrera = await pool.query(consultaFinales, [element.idMateria]);
    }

    res.json(dicta);
};

module.exports = dictaController;