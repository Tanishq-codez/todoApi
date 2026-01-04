// file 4
const mongoose = require("mongoose");

const todoSchema  = new mongoose.Schema(
    {
        title : {
            type : String , 
            required : true ,    
        },

        completed : {
            type : Boolean , 
            default : false 
        } , 
        user : {
            type : mongoose.Schema.Types.ObjectId ,
            ref : "User",
            required : true 
        }
    } , 
    {
        timestamps : true 
    }
);

//“Create a MongoDB collection named todos using this schema, and give me an object to interact with it.”
module.exports = mongoose.model("Todo" , todoSchema);

