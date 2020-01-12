const finalController = {};

finalController.all = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM final ",(err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

finalController.necesaria = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM final WHERE final.necesaria = ?", (req.params.necesaria),(err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

finalController.disponible = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM final WHERE final.disponible = ?", (req.params.disponible),(err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

module.exports = finalController;