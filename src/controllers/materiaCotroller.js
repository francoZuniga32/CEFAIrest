const materiaController = {};

materiaController.all = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM materia ", (err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
}

materiaController.id = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM materia WHERE idMateria = ?",[req.params.id], (err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
}

materiaController.nombre = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM materia WHERE nombre LIKE ? ",['%'+req.params.nombre+'%'], (err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
}

materiaController.ano = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM materia WHERE ano = ? ",[req.params.ano], (err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

materiaController.cuatrimestre = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM materia WHERE cuatrimestre = ? ",[req.params.cuatrimestre], (err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

materiaController.cuatrimestreano = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM materia WHERE cuatrimestre = ? AND ano = ?",[req.params.cuatrimestre, req.params.ano], (err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

module.exports = materiaController;