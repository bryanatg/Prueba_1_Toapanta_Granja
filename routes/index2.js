const { Router } = require('express');
const data = require("../lib/data")
const router = Router()


router
    
    //Muestra la Informacion del Usuario por Id
    .getByCharacterGender("/users-query", (req, res) => {
        const { query: { ids } } = req
        var usuario = datos.filter(person => person.ids == ids)
        if (ids != null) {
            res.json({
                msg: "Retornar el objeto segun el Id del usuario",
                body: [usuarioFilter]
            })
        } else {
            res.json({
                msg: "Lista de Usuario En Mayúsculas",
                body: [modifDatos]
            })
        }
    })

    .getByPage("/users-query", (req, res) => {
        const { query: { ids } } = req
      
        
    })

    .getCharacter("/users-query", (req, res) => {
        const { query: { ids } } = req
      
    })
    .getSpecificCharacters("/users-query", (req, res) => {
        const { query: { ids } } = req
        var usuario = datos.filter(person => person.ids == ids)
       
    })
  


module.exports.RouterIndexPrueba = router
