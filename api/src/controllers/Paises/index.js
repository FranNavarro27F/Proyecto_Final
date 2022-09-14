const { Paises } = require("../../db");
const {paises} = require("../../json/Paises.json")
// const { Op } = require("sequelize");

const ERROR = "Error @ controllers/Countries";

// -----------------------------------------------
const jsonCountris = async ()=>{
  try{
     paises.map(async (name)=> {
        await Paises.findOrCreate({
          where : {name}
        })
     })
     console.log('Paises por default caragados en la DB')
    
  }catch(e){
     console.log(e)
  }  
}
const getCountries = async (req, res) => {
  try {
    console.log('entre')
    datosPais = await Paises.findAll()
    res.status(200).send(datosPais);
  } catch (e) {
    res.status(400).send(e);
  }
};
const postCountries = async (req, res) => {
  try {
    const {name} = req.body;
    console.log(name);
    if(name){
      datosPais = await Paises.findOrCreate({
        where : {
          name,
        }
      })
      res.status(200).send('Dato agregado corerctamente'+ datosPais);
    }else{
      res.status(400).send('Error debe agregar un nombre')
    }
    
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = { getCountries,postCountries,jsonCountris };
