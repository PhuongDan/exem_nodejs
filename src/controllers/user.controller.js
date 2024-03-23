const User = require("./../models/user.model");
const fs = require("fs");
exports.list = async (req,res)=>{
    try {
        const rs = await User.find();
        res.render("listUser",{user:rs});
    } catch (error) {
        
    }
}
exports.formCreate = (req,res)=>{
    const data = req.body;
    data.url = req._parsedOriginalUrl.path;
    res.render("formUser",{user:data});
}
exports.store = async (req,res)=>{
    const data = req.body;
    const file = req.file;
    try {
        const u = new User(data);
        await u.save();
        res.redirect("/user");
    } catch (error) {
        res.render("formUser",{user:data,error:error});
    }
}

