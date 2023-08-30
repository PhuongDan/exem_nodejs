const Product = require("./../models/product.model");
const fs = require("fs");
exports.list = async (req,res)=>{
    try {
        const rs = await Product.find();
        res.render("listProduct",{products:rs});
    } catch (error) {
        
    }
}
exports.formCreate = (req,res)=>{
    const data = req.body;
    data.url = req._parsedOriginalUrl.path;
    res.render("formProduct",{product:data});
}
exports.store = async (req,res)=>{
    const data = req.body;
    const file = req.file;
    try {
        const p = new Product(data);
        await p.save();
        res.redirect("/product");
    } catch (error) {
        res.render("formProduct",{product:data,error:error});
    }
}

exports.delete =  async (req,res)=>{
    const _id = req.params.id;
    try {
        await Product.findByIdAndDelete(_id);
        res.redirect("/product");
    } catch (error) {
        res.redirect("/product");
    }
}