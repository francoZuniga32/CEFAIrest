const httpstatus = {};

httpstatus.http404 = (req, res, next)=>{
    //error 404 http code
    console.log(res.status);
    res.status(404).json("Not found.");
    next();
};

module.exports = httpstatus;