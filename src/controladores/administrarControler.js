const administrarControler = {};

administrarControler.home = (req, res)=>{
    res.render("administrar");
};

administrarControler.carreras = (req, res)=>{
    res.render("administrar/carreras");
};

administrarControler.materias = (req, res)=>{
    res.render("administrar/materias");
};

administrarControler.correlativas = (req, res)=>{
    res.render("administrar/correlativas");
};

administrarControler.horarios = (req, res)=>{
    res.render("administrar/horarios");
};


module.exports = administrarControler;