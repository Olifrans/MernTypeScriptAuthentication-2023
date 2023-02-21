import app from "./app";
import env from "./util/validadeEnv";
import mongoose from "mongoose";

const port = env.PORT;

mongoose.connect(env.MONGO_CONNECTION_STRING)
.then(()=> { 
    console.log("Mongoose conectado");
    app.listen(port, () => {
        console.log("Servidor rodando na porta: " + port);
    });
})
.catch(console.error);