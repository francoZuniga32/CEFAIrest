const dictaController = {};

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

module.exports = dictaController;