const carreraCotroller = {};

carreraCotroller.all = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM carrera", (err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};
carreraCotroller.id = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM carrera WHERE id = ? ",[req.params.id], (err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};
carreraCotroller.nombre = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM carrera WHERE id = ? ",[req.params.nombre], (err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};
carreraCotroller.plan = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM carrera WHERE plan = ? ",[req.params.plan], (err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};
carreraCotroller.duracion = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM carrera WHERE duracion = ? ",[req.params.duracion], (err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};
carreraCotroller.duracionmenor = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM carrera WHERE duracion <= ? ",[req.params.duracion], (err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};
carreraCotroller.duracionmayor = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM carrera WHERE duracion >= ? ",[req.params.duracion], (err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};
carreraCotroller.buscar = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM carrera WHERE nombre LIKE ? OR plan LIKE ? ",['%'+req.params.buscar+'%', '%'+req.params.buscar+'%'], (err, materias)=>{
            if(err){
                res.json(err);
            }
            res.json(materias);
        });
    });
};

module.exports = carreraCotroller;