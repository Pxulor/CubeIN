const mongoose = require("mongoose")
const cuboSchema = require("../models/cuboSchema")

const exibeTodos = async(request,response)=>{
    let query = { }
    try {
        const todosResultados= await cuboSchema.find(query)
        response.status(200).json(todosResultados)
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const novoCubo = async(request,response)=>{
    try {
        const { categoria, preco, marca} = request.body
        const novoCubo = new cuboSchema({
            categoria: categoria,
            preco: preco,
            marca: marca
        })
        const salvaProduto = await novoCubo.save()
        response.status(201).json({
            novoCubo: salvaProduto
        })
    } catch (error) {
        response.status(400).json({
            message:error.message
        })
    }
}

const alteraCubo = async(request,response)=>{
    const { categoria, preco, marca } =request.body
    try {
        const encontraCubo = await cuboSchema.findById(request.params.id)
    if (!encontraCubo){
        return response.status(404).send({
            message: "não encontrado"
        })
    }
    if(categoria) encontraCubo.categoria=categoria
    if(preco) encontraCubo.preco=preco
    if(marca) encontraCubo.marca=marca
    const salvarCubo = await encontraCubo.save()
    response.status(200).json({encontraCubo: salvarCubo})
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const deleteCubo = async(request,response)=>{
    try {
        const resultadoBusca = await cuboSchema.findById(request.params.id)
        await resultadoBusca.deleteOne()
        response.status(200).json({
            message: "Produto Deletado"
        })
    } catch (error) {
        response.status(400).json({
            message: error.message
        })
    }
}

module.exports={
    exibeTodos,
    novoCubo,
    alteraCubo,
    deleteCubo
}