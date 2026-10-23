const mongoose= require("mongoose")
//const monoose= require("mongoose")

const balochi_AB_Schema=new mongoose.Schema({
    letter:String,
    soundurl:String,
    word1:String,
    imageurl1:String,
    word2:String,
    imageurl2:String

    
})

const balochi_AB_model=mongoose.model("balochi_AB",balochi_AB_Schema)

module.exports=balochi_AB_model