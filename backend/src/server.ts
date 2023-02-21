import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

const app = express();

//const port = 5000;
//const port = undefined;


app.get("/", (req, res) => {
    res.send("Olá, Olifrans Oliveira")
});


mongoose.connect(process.env.MONGO_CONNECTION_STRING)
.then(()=>{
    console.log("mongoose conectado e funcionando");
    app.listen(port, () => {
        console.log("Servidor rodando na porta: " + port);
    });
})


