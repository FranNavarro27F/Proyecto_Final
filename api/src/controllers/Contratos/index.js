const { Contratos, Usuarios } = require("../../db");
// const { Op } = require("sequelize");

const ERROR = "Error @ controllers/Contratos";

const setStatus = (date = null, expiration_date = null) => {
  try {
    //
    const today = new Date();
    let status;

    //   const minute = 1000 * 60;
    //   const hour = minute * 60;
    //   const day = hour * 24;

    //   const d = Date.parse(expiration_date);
    //   let days = Math.round(d / day);

    if (date) {
      status =
        today.setHours(0, 0, 0, 0) < date.setHours(0, 0, 0, 0)
          ? "Inactivo"
          : "Activo";
    }

    if (
      expiration_date &&
      today.setHours(0, 0, 0, 0) > expiration_date.setHours(0, 0, 0, 0)
    )
      status = "Completado";

    return status;
    //
  } catch (e) {
    console.warn(ERROR, `(setStatus → Date)`);
  }
};

// -----------------------------------------------

// GET (ALL) CONTRACTS
const getContracts = async () => {
  try {
    //
    let contracts = await Contratos.findAll({
      include: [
        {
          model: Usuarios,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });

    contracts = await contracts?.map((c) => c.dataValues);
    const displayContracts = await contracts?.map((c) => {
      return {
        id: c.id,
        employer: c.employer,
        developer: c.developer,
        description: c.description,
        date: c.date,
        expiration_date: c.expiration_date,
        status: c.status,
        price: c.price,
        payment: c.payment_id,
        aceptado: c.aceptado,
        habilitado: c.habilitado,
      };
    });

    return displayContracts;
    //
  } catch (e) {
    console.error(`${ERROR}/getContracts --> ${e}`);
  }
};

// -----------------------------------------------

// GET CONTRACT (ID)
const getContractById = async (id) => {
  try {
    //
    return await Contratos.findByPk(id, {
      include: [
        {
          model: Usuarios,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });
    //
  } catch (e) {
    console.error(`${ERROR}/getContractById --> ${e}`);
  }
};

// -----------------------------------------------

// POST (NEW) CONTRACT
const createContract = async (data) => {
  try {
    //
    const {
      employer,
      developer,
      description,
      date,
      expiration_date,
      price,
      status,
      // payment_id,
    } = data;

    const newContract = await Contratos.create({
      employer,
      developer,
      description,
      date,
      expiration_date,
      // status: setStatus(date),
      status,
      price,
      // payment_id,
      aceptado: false,
      habilitado: true,
    });

    // traigo a las 2 partes del contrato para setear relacion con contrato.
    let el_que_contrata = await Usuarios.findByPk(employer);
    let el_programador_contratado = await Usuarios.findByPk(developer);

    //seteo relacion en tabla intermedia mediante los ID de usuarios a contratos-usuarios.
    await el_que_contrata.addContratos(newContract.dataValues.id);
    await el_programador_contratado.addContratos(newContract.dataValues.id);

    return `Contrato suscrito correctamente.
    Entre: ${employer} (contratante) y ${developer} (contratista)
    Desde: ${date} - Hasta: ${expiration_date}
    Por la cantidad de USD: ${price}`;
    //
  } catch (e) {
    console.error(`${ERROR}/createContract --> ${e}`);
  }
};

// -----------------------------------------------

// PUT (EXISTING) CONTRACT
const modifyContract = async (id, data) => {
  try {
    //
    const {
      description,
      date,
      expiration_date,
      price,
      payment_id,
      aceptado,
      habilitado,
    } = data;
    const contract = await Contratos.findByPk(id);

    if (description) contract.description = description;
    if (date) contract.date = date;
    if (expiration_date) contract.expiration_date = expiration_date;
    if (price) contract.price = price;
    if (payment_id) contract.payment_id = payment_id;
    if (aceptado) contract.aceptado = aceptado;
    if (habilitado) contract.habilitado = habilitado;
    contract.status = setStatus(date, expiration_date);

    await contract.save();

    return `Contrato modificado exitosamente.
    Desde: ${date} - Hasta: ${expiration_date}
    Por la cantidad de USD: ${price}`;
    //
  } catch (e) {
    console.error(`${ERROR}/modifyContract --> ${e}`);
  }
};

// -----------------------------------------------

// PUT (CANCEL) CONTRACT
const cancelContract = async (id) => {
  try {
    //
    // const contract = await Contratos.findByPk(id);
    // contract.status = "Cancelado";
    await Contratos.update({ aceptado: false }, {
      where: {
      id: id
      }
      });

    return `Contrato cancelado exitosamente.`;
    //
  } catch (e) {
    console.error(`${ERROR}/cancelContract --> ${e}`);
  }
};

// -----------------------------------------------

// PUT (ACCEPT) CONTRACT
const acceptContract = async (id) => {
  try {
    //
    // const contract = await Contratos.findByPk(id);
    // contract.aceptado = true;
    await Contratos.update({ aceptado: true }, {
      where: {
      id: id
      }
      });

    return `Propuesta aceptada exitosamente.`;
    //
  } catch (e) {
    console.error(`${ERROR}/acceptContract --> ${e}`);
  }
};

// -----------------------------------------------

// DELETE (EXISTING) CONTRACT
const deleteContract = async (id) => {
  try {
    //
    const contract = await Contratos.destroy({ where: { id } });

    if (contract > 0) {
      console.log(`Contrato eliminado exitosamente`);
    } else console.error(`Contrato inexistente.`);
    //
  } catch (e) {
    console.error(`${ERROR}/deleteContract --> ${e}`);
  }
};

// -----------------------------------------------

module.exports = {
  getContracts,
  getContractById,
  createContract,
  modifyContract,
  acceptContract,
  cancelContract,
  deleteContract,
};
