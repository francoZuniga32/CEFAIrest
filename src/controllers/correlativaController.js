const correlativaController = {};

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
        conn.query("SELECT correlativa.necesaria, correlativa.disponible FROM correlativa, imparte WHERE correlativa.necesaria = imparte.idMateria AND correlativa.disponible AND imparte.idCarrera = ? ", [req.params.idcarrera],(err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

correlativaController.carreranecesaria = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT correlativa.necesaria, correlativa.disponible FROM correlativa, imparte WHERE correlativa.necesaria = imparte.idMateria AND correlativa.disponible AND imparte.idCarrera = ? AND correlativa.necesaria = ?", [req.params.idcarrera, req.params.necesaria],(err, materias)=>{
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

module.exports = correlativaController;