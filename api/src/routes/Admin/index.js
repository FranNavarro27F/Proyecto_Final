const { Router } = require("express");
const { postLenguajes, postServicios, borrLogicLenguaje, borrLogicServicios, postPaises, postTecnologias, borrLogicPaises, borrLogicTecnologias } = require("../../controllers/Admin");

const router = Router();

// -----------------------------------------------


router.post("/lenguajes", async (req, res)=>{
    try {
        let {name} = req.body
        if(!name){
            res.sendStatus(400).send(`Error --→ ${e}`);
        }else{
            let newLeng = await postLenguajes(name)
            
            res.status(200).json(newLeng);
        }
    } catch (e) {
        res.status(400).send(`Error --→ ${e}`);
    }
})

router.post("/servicios", async (req, res)=>{
    try {
        let {name} = req.body
        if(!name){
            res.sendStatus(400).send(`Error --→ ${e}`);
        }else{
            let newServ = await postServicios(name)
            
            res.status(200).json(newServ);
        }
    } catch (e) {
        res.status(400).send(`Error --→ ${e}`);
    }
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


router.put("/tecnologias",async (req, res) => {
    try {
        const {id,habilitado} = req.body;
        if (id){
            res.status(200).json(await borrLogicTecnologias(id,habilitado));
        }else{
            res.status(400).send("error debe enviar por body el id");
        }  
    } catch (e) {
        res.status(404).send(`Error --→ ${e}`);
    } 
})



router.put("/lenguajes", async (req, res)=>{
    try {

        res.status(200).json(await borrLogicLenguaje(req.body))



    } catch (e) {
        res.status(400).send(`Error --→ ${e}`);
    }
})

router.put("/paises",async (req, res) => {
    try {
        const {id,habilitado} = req.body;
        console.log(id,habilitado)
        if (id){
            res.status(200).json(await borrLogicPaises(id,habilitado));
        }else{
            res.status(400).send("error debe enviar por body el id");
        }  
    } catch (e) {
        res.status(404).send(`Error --→ ${e}`);
    }
})



router.put("/servicios", async (req, res)=>{
    try {
        res.status(200).json(await borrLogicServicios(req.body))
    } catch (e) {
        res.status(400).send(`Error --→ ${e}`);
    }
})


module.exports = router;