const express = require("express")

let app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
    return res.status(200).send("recebi requisição GET na rota raiz");
});

app.get('/produtos', function (req, res) {
    return res.status(200).send("recebi requisição GET na rota /produtos");
});

app.get('/filmes', function (req, res) {
    return res.status(400).send("Parametros Invalidos");
});

app.get('/filmes/:id', function (req, res) {

    return res.status(200).send("Recebi requisição get na rota /filmes/id");
});


app.post('/musica', function (req, res) {

    return res.status(400).json("Parametros Invalidos");
});

app.post('/musica/:id/', function (req, res) {

    return res.status(400).json("Parametros Invalidos");
});

app.post('/musica/:id/:autor/', function (req, res) {

    return res.status(400).json("Parametros Invalidos");
});

app.post('/musica/:id/:autor/:genero', function (req, res) {

    return res.status(200).json({ id: req.params.id, autor: req.params.autor, genero: req.params.genero });
});

app.listen(3000, function () {
    console.log("Servidor rodando na porta 3000 ...");
})