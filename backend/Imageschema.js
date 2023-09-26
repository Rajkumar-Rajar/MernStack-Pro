const { ObjectId } = require('mongodb');
const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
    img: {
        data: String,
        contentType: String
    },
    id_object:{
        type:ObjectId,
        required:true
    },
    first_name:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Image', ImageSchema);
