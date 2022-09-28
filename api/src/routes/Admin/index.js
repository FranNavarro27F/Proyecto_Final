const { Router } = require("express");
const { postLenguajes, postServicios } = require("../../controllers/Admin");

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


router.post("/tecnologias", (req, res)=>{
    
})


router.post("/servicios", async (req, res)=>{
    try {
        let {name} = req.body
        if(!name){
            res.sendStatus(400).send(`Error --→ ${e}`);
        }else{
            let newServ = await postServicios(req.body)
            
            res.status(200).json(newServ);
        }
    } catch (e) {
        res.status(400).send(`Error --→ ${e}`);
    }
})


router.post("/paises", (req, res)=>{

})

//Put de borrado lógico

router.put("/lenguajes/:id", async (req, res)=>{
    try {

        let {id} = req.params

    } catch (e) {
        res.status(400).send(`Error --→ ${e}`);
    }
})


router.put("/tecnologias/:id", (req, res)=>{

})


router.put("/servicios/:id", async (req, res)=>{
    try {
        
    } catch (e) {
        res.status(400).send(`Error --→ ${e}`);
    }
})


router.put("/paises/:id", (req, res)=>{

})

module.exports = router;