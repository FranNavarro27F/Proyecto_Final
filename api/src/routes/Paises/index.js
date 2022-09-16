const { Router } = require("express");
const { getPaises, postPaises,deletePaises, putPaises } = require("../../controllers/Paises/index");

const router = Router();

router.get('/', async (req, res)=>{
    try {
        res.status(200).json(await getPaises())
    } catch (e) {
        res.status(404).send(`Error --→ ${e}`);
    }
});

router.post('/',async(req, res)=>{
    try {
        const {name} = req.body;
        if (name){
            res.status(200).json(await postPaises(name));
        }else{
            res.status(400).send("error debe agregar un nombre")
        }  
    } catch (e) {
        res.status(404).send(`Error --→ ${e}`);
    }
});

router.delete('/:id',async(req, res)=>{
    try {
        const {id} = req.params;
        if (id){
            res.status(200).json(await deletePaises(id));
        }else{
            res.status(400).send("error debe enviar por body el id del pais a borrar");
        }  
    } catch (e) {
        res.status(404).send(`Error --→ ${e}`);
    }
})

router.put('/',async(req, res)=>{
    try {
        const {id,name} = req.body;
        if (id){
            res.status(200).json(await putPaises(id, name));
        }else{
            res.status(400).send("error debe enviar por body el id del pais para actualizar");
        }  
    } catch (e) {
        res.status(404).send(`Error --→ ${e}`);
    }
})
module.exports = router;