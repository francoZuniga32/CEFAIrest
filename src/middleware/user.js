const user = {};

user.midelware = (req, res, next)=>{
    if(!req.session.user){
        console.log("no esta loguedo");
        res.redirect("/login");
    }
    next();
};

module.exports = user;