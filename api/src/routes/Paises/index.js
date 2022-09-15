const { Router } = require("express");
const { getPaises, postPaises,deletePaises } = require("../../controllers/Paises/index");

const router = Router();

router.get('/', async (req, res)=>{
    try {
        res.status(200).json(await getPaises())
    } catch (e) {
        res.status(400).json({ error: e.message })
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
        res.status(404).json({ error: e.message })
    }
});

router.delete('/',async(req, res)=>{
    try {
        const {id} = req.query;
        if (id){
            res.status(200).json(await deletePaises(id));
        }else{
            res.status(400).send("error debe enviar por body el id del pais a borrar");
        }  
    } catch (e) {
        res.status(404).json({ error: e.message })
    }
})

module.exports = router;