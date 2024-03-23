const mongoose = require("mongoose");
const user_schema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    MobileNumber:{
        type:Number,
        required:true
    },
    UserName:{
        type:String,
        required:true
    },

    Password:{
        type:Password,
      required:true
    }
 
    
});
module.exports = mongoose.model("User",user_schema);