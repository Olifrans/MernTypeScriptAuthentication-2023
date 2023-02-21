//import "dotenv/config";
import app from "./app";
import env from "./util/validadeEnv";
import mongoose from "mongoose";



// const port = process.env.PORT;
const port = env.PORT;


// mongoose.connect(process.env.MONGO_CONNECTION_STRING!)
mongoose.connect(env.MONGO_CONNECTION_STRING)
.then(()=> { 
    console.log("mongoose conectado e funcionando");

    app.listen(port, () => {
        console.log("Servidor rodando na porta: " + port);
    });
}).catch(console.error);


