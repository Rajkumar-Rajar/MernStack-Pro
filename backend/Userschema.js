const mongoose =require('mongoose')

const user_register_detailes =new mongoose.Schema({


    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone_number:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    date_of_birth:{
        type:Date,
        required:true
    },
})



const user_register_detailes1 =mongoose.model("user_data",user_register_detailes)


module.exports = user_register_detailes1



