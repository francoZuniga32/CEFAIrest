const indexControler = {};

indexControler.render = (req, res)=>{
    res.render('index');
};

indexControler.horarios = (req, res)=>{
    res.render('horarios');
};

indexControler.correlativas = (req, res)=>{
    res.render('correlativas');
};

indexControler.login = (req, res)=>{
    res.render('login');
}

indexControler.misemana = (req, res)=>{
    res.render('misemana');
}

module.exports = indexControler;