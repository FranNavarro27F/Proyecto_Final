const { Contratos } = require("../../db");
// const { Op } = require("sequelize");

const PATH = "/contratos";
const ERROR = "Error @ controllers/Contratos";

// -----------------------------------------------

// Ejemplo 1
const getContratos = async () => {
  try {
    const getContrato = await Contratos.findAll();
    return getContrato;
  } catch (e) {
    console.error(`${ERROR}/deleteService --> ${e}`);
  }
};
const postContratos = async (data) => {
  try {
    const { employer, developer, description, date, expiration_date, status, precio } = data;
  
    const result = await Contratos.create({
      employer,
      developer,
      description,
      date,
      expiration_date,
      status,
      precio
    });
    return `Contratos (${id}) post successfully`;
  } catch (e) {
    console.error(`${ERROR}/deleteService --> ${e}`);
  }
};
const putContratos = async (data) => {
  try {
    const { id, employer, developer, description, status, precio } = data;
    Contratos.update(
      {
        employer,
        developer,
        description,
        status,
        precio,
      },
      { where:{id} })
    return `Contratos (${id}) put successfully`;
  } catch (e) {
    console.error(`${ERROR}/deleteService --> ${e}`);
  }
};
const deleteContratos = async (id) => {
  try {
    await Contratos.destroy({
      where: { id },
    });
    return `Contratos (${id}) deleted successfully`;
  } catch (e) {
    console.error(`${ERROR}/deleteService --> ${e}`);
  }
};

module.exports = { getContratos, postContratos, putContratos, deleteContratos };
