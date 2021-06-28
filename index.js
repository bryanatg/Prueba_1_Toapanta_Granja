const express = require('express'); 
const app  = express();



//Prueba

const {RouterIndexPrueba} = require("./routes/index2")

app.use("/", RouterIndexPrueba)
app.use("/prueba", RouterIndexPrueba)

app.listen(3000, () => {
    console.log("Servidor Escuchado en  http://localhost:3000")
})

