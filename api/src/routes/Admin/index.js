const { Router } = require("express");
const {postPaises,postTecnologias,borrLogicPaises, borrLogicTecnologias } = require("../../controllers/Admin");

const router = Router();

// -----------------------------------------------


router.post("/lenguajes", (req, res) => {

})


router.post("/tecnologias",async (req, res) => {
    try {
        const { name } = req.body;
        if (name) {
            res.status(200).json(await postTecnologias(name));
        } else {
            res.status(400).send("error debe agregar un nombre")
        }
    } catch (e) {
        res.status(404).send(`Error --→ ${e}`);
    }
})


router.post("/servicios", (req, res) => {

})


router.post("/paises",async (req, res) => {
    try {
        const { name } = req.body;
        if (name) {
            res.status(200).json(await postPaises(name));
        } else {
            res.status(400).send("error debe agregar un nombre")
        }
    } catch (e) {
        res.status(404).send(`Error --→ ${e}`);
    }
})

//------------------ Put de borrado logico-----------------//

router.put("/lenguajes", (req, res) => {

})


router.put("/tecnologias",async (req, res) => {
    try {
        const {id} = req.body;
        if (id){
            res.status(200).json(await borrLogicTecnologias(id));
        }else{
            res.status(400).send("error debe enviar por body el id");
        }  
    } catch (e) {
        res.status(404).send(`Error --→ ${e}`);
    } 
})


router.put("/servicios", (req, res) => {

})


router.put("/paises",async (req, res) => {
    try {
        const {id} = req.body;
        if (id){
            res.status(200).json(await borrLogicPaises(id));
        }else{
            res.status(400).send("error debe enviar por body el id");
        }  
    } catch (e) {
        res.status(404).send(`Error --→ ${e}`);
    }
})


module.exports = router;