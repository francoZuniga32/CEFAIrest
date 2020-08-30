const dictaController = {};
const pool = require('../database');
const { id } = require('./materiaCotroller');

dictaController.all = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM dicta, materia WHERE materia.idMateria = dicta.idMateria", (err, materias) => {
            if (err) {
                res.json(err);
            }
            res.json(materias);
        });
    });
};

dictaController.idmateria = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM dicta, materia WHERE materia.idMateria = dicta.idMateria AND dicta.idMateria = ?", [req.params.idmateria], (err, materias) => {
            if (err) {
                res.json(err);
            }
            res.json(materias);
        });
    });
};

dictaController.dia = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM dicta WHERE dia = ? ", [req.params.dia], (err, materias) => {
            if (err) {
                res.json(err);
            }
            res.json(materias);
        });
    });
};

dictaController.cuatrimestre = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM dicta WHERE cuatrimestre = ? ", [req.params.cuatrimestre], (err, materias) => {
            if (err) {
                res.json(err);
            }
            res.json(materias);
        });
    });
};

dictaController.estado = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM dicta WHERE estado = ?", [req.params.estado], (err, materias) => {
            if (err) {
                res.json(err);
            }
            res.json(materias);
        });
    });
};

dictaController.hora = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM dicta WHERE hora = ?", [req.params.estado], (err, materias) => {
            if (err) {
                res.json(err);
            }
            res.json(materias);
        });
    });
};

dictaController.horamenor = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM dicta WHERE hora <= ? ", [req.params.hora], (err, materias) => {
            if (err) {
                res.json(err);
            }
            res.json(materias);
        });
    });
};

dictaController.horamayor = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM dicta WHERE hora >= ? ", [req.params.hora], (err, materias) => {
            if (err) {
                res.json(err);
            }
            res.json(materias);
        });
    });
};

dictaController.materiaCuatrimestre = (req, res) => {
    var idmateria = req.params.idmateria;
    var cuatrimestre = req.params.cuatrimestre;
    var consulta = "SELECT * FROM dicta, materia WHERE dicta.idMateria = materia.idMateria AND dicta.idMateria = ? AND dicta.cuatrimestre = ? ";

    pool.query(consulta, [idmateria, cuatrimestre], (err, materias) => {
        if (err) {
            console.log(err);
        }
        res.json(materias);
    });
};

dictaController.diaHora = async (req, res) => {
    var dia = req.params.dia;
    var horainicio = req.params.hora;
    var cuatrimestre = req.params.cuatrimestre;

    var consulta = "SELECT dicta.*, materia.nombre as nombremateria FROM dicta, materia WHERE materia.idMateria = dicta.idMateria AND dicta.dia = ? AND dicta.horafin > ? AND dicta.cuatrimestre = ? ORDER BY horainicio ASC";
    var consultaFinales = "SELECT DISTINCT imparte.idCarrera FROM imparte WHERE imparte.idMateria = ? ";

    var horario = await pool.query(consulta, [dia, horainicio, cuatrimestre]);

    for (let i = 0; i < horario.length; i++) {
        const element = horario[i];
        element.carreras = await pool.query(consultaFinales, [element.idMateria]);
    }

    res.json(horario);
}

dictaController.administrar = async (req, res) => {
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

    var dicta = await pool.query(consulta, [idcarrera]);

    for (let i = 0; i < dicta.length; i++) {
        var element = dicta[i];
        element.carreras = await pool.query(consultaFinales, [element.idMateria]);
    }

    res.json(dicta);
};

dictaController.diaCarrera = async (req, res) => {
    var consulta = "SELECT DISTINCT dicta.* , materia.nombre  FROM dicta, imparte , materia WHERE dicta.idMateria = imparte.idMateria AND dicta.idMateria = materia.idMateria AND imparte.idCarrera = ? AND dicta.dia = ?";
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

dictaController.anioCarrera = async (req, res) => {
    var consulta = "SELECT DISTINCT dicta.*, materia.nombre  FROM dicta, imparte , materia WHERE dicta.idMateria = imparte.idMateria AND dicta.idMateria = materia.idMateria AND imparte.idCarrera = ? AND materia.ano = ? AND dicta.cuatrimestre = ?";
    var consultaFinales = "SELECT DISTINCT carrera.idCarrera FROM carrera, imparte WHERE carrera.idCarrera = imparte.idCarrera AND imparte.idMateria = ?";
    var idcarrera = req.params.idcarrera;
    var anio = req.params.anio;
    var cuatrimestre = req.params.cuatrimestre;

    var dicta = await pool.query(consulta, [idcarrera, anio, cuatrimestre]);
    for (let i = 0; i < dicta.length; i++) {
        var element = dicta[i];
        element.carrera = await pool.query(consultaFinales, [element.idMateria]);
    }

    res.json(dicta);
}

dictaController.renderEdit = (req, res) => {
    var consulta = "SELECT * FROM `dicta` WHERE idMateria = ? AND dia = ? AND modulo = ? AND horainicio = ?";
    var idmateria = req.params.idmateria;
    var dia = req.params.dia;
    var modulo = req.params.modulo;
    var horainicio = req.params.horainicio;

    pool.query(consulta, [idmateria, dia, modulo, horainicio], (err, dicta) => {
        console.log(dicta);
        res.render("administrar/editarHorario", { data: dicta[0] });
    });
}

dictaController.edit = (req, res) => {
    var consulta = "UPDATE `dicta` SET `idMateria`=?,`aula`=?,`dia`=?,`modulo`=?,`horainicio`=?,`horafin`=?,`cuatrimestre`=?,`estado`=? WHERE idMateria = ? AND aula = ? AND dia = ? AND modulo = ? AND horainicio = ? AND horafin = ? AND cuatrimestre = ? AND estado = ?"

    var idMateriaOrginal = req.body.idMateriaOrginal;
    var aulaOriginal = req.body.aulaOriginal;
    var diaOriginal = req.body.diaOriginal;
    var moduloOriginal = req.body.moduloOriginal;
    var horafinOriginal = req.body.horafinOriginal;
    var horainicioOriginal = req.body.horainicioOriginal;
    var cuatrimestreOriginal = req.body.cuatrimestreOriginal;
    var estadoOriginal = req.body.estadoOriginal;

    var idMateria = req.body.idMateria;
    var aula = req.body.aula;
    var dia = req.body.dia;
    var modulo = req.body.modulo;
    var horafin = req.body.horafin;
    var horainicio = req.body.horainicio;
    var cuatrimestre = req.body.cuatrimestre;
    var estado = req.body.estado;

    console.log(idMateriaOrginal, aulaOriginal, diaOriginal, moduloOriginal, horainicioOriginal, horafinOriginal, cuatrimestreOriginal, estadoOriginal);

    pool.query(consulta, [idMateriaOrginal, aula, dia, modulo, horainicio, horafin, cuatrimestre, estado, idMateriaOrginal, aulaOriginal, diaOriginal, moduloOriginal, horainicioOriginal, horafinOriginal, cuatrimestreOriginal, estadoOriginal], (err, materias)=>{
        if(err){
            console.log(err);
        }
        res.redirect(`/administrar/horarios/horario/edit/${idMateriaOrginal}/${dia}/${modulo}/${horainicio}`);
    })
}


module.exports = dictaController;