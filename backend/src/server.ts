import express from "express";

const app = express();
const port = 5000;


app.get("/", (req, res) => {
    res.send("Olá, Olifrans Oliveira")
});

app.listen(port, () => {
    console.log("Servidor rodando na porta: " + port);
});