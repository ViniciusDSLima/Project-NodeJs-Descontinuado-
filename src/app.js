import express from "express";

const app = express();

const livros = [
    {id:1, "titulo" : "Senhor dos aneis"},
    {id:2, "titulo" : "Harry Potter"}
]

app.get('/', function(req, res){
    res.status(200).send('Curso de node');
})

app.get("/livros", function(req, res){
    res.status(200).json(livros);
})

export default app;