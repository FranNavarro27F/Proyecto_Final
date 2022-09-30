const { Router } = require("express");
const { postLenguajes, postServicios, borrLogicLenguaje, borrLogicServicios, postPaises, postTecnologias, borrLogicPaises, borrLogicTecnologias, borrLogicUsuario, getAdminLeng, getAdminTec, getAdminPaises, getAdminServ } = require("../../controllers/Admin");

const router = Router();

// -----------------------------------------------


router.post("/lenguaje", async (req, res)=>{
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

router.post("/servicio", async (req, res)=>{
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


router.post("/tecnologia",async (req, res) => {
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

router.post("/pais",async (req, res) => {
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


router.put("/tecnologia",async (req, res) => {
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



router.put("/lenguaje", async (req, res)=>{
    try {

        res.status(200).json(await borrLogicLenguaje(req.body))



    } catch (e) {
        res.status(400).send(`Error --→ ${e}`);
    }
})

router.put("/pais",async (req, res) => {
    try {
        const {id,habilitado} = req.body;
        if (id){
            res.status(200).json(await borrLogicPaises(id,habilitado));
        }else{
            res.status(400).send("error debe enviar por body el id");
        }  
    } catch (e) {
        res.status(404).send(`Error --→ ${e}`);
    }
})



router.put("/servicio", async (req, res)=>{
    try {
        res.status(200).json(await borrLogicServicios(req.body))
    } catch (e) {
        res.status(400).send(`Error --→ ${e}`);
    }
})

router.put("/usuario", async (req, res)=>{
    try {
        
        res.status(200).json(await borrLogicUsuario(req.body))

    } catch (e) {
        res.status(400).send(`Error --→ ${e}`);
    }
})

// Get de Admin de informacion


// router.get("/lenguajes", async (req, res)=>{
//     try {
        
//         res.send(200).json(await getAdminLeng())

//     } catch (e) {
//         res.status(400).send(`Error --→ ${e}`);
//     }
// })


// router.get("/tecnologias", async (req, res)=>{
//     try {
        
//         res.send(200).json(await getAdminTec())

//     } catch (e) {
//         res.status(400).send(`Error --→ ${e}`);
//     }
// })


// router.get("/paises", async (req, res)=>{
//     try {
        
//         res.send(200).json(await getAdminPaises())

//     } catch (e) {
//         res.status(400).send(`Error --→ ${e}`);
//     }
// })


// router.get("/servicios", async (req, res)=>{
//     try {
        
//         res.send(200).json(await getAdminServ())

//     } catch (e) {
//         res.status(400).send(`Error --→ ${e}`);
//     }
// })



module.exports = router;