const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({
    ProductCode:{
        type:String,
        required:true
    },
    ProductName:{
        type:String,
        required:true
    },
    ProductData:{
        type:Date,
        required:true
    },
    ProductOriginPrice:{
        type:Number,
        min:0,
        required:true
    },

    Quantity:{
        type:Number,
        min:0,
      required:true
    },
    ProductStoreCode:{
        type:String,
        required:true,
    
        
    }
    
});
module.exports = mongoose.model("Product",product_schema);