const mongoose = require("mongoose");

const cuboSchema = new mongoose.Schema({
    categoria: {
        type: String,
        required: false
    },
    preco: {
        type: Number,
        required: true
    },
    marca:{
        type: String,
        required: false
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
});

module.exports=mongoose.model('cubo', cuboSchema);