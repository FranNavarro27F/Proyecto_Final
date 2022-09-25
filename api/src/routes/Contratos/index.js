const { Router } = require("express");
const { Contratos } = require("../../db");
const {
  getContracts,
  getContractById,
  createContract,
  modifyContract,
  cancelContract,
  deleteContract,
} = require("../../controllers/Contratos");

const router = Router();

const ERROR = `Error @ routes/Contratos --> `;

// -----------------------------------------------

// ---------- GET CONTRACTS ----------
router.get("/", async (req, res) => {
  try {
    //
    const contracts = await getContracts();
    if (contracts.length) res.json(contracts);
    else return "No se han creado contratos.";
    //
  } catch (e) {
    res.status(400).send(ERROR, e);
  }
});

// ---------- GET CONTRACTS (ID) ----------
router.get("/:id", async (req, res) => {
  try {
    //
    const { id } = req.params;
    const contract = await getContractById(id);
    res.send(contract);
    //
  } catch (e) {
    res.status(400).send(ERROR, e);
  }
});

// ---------- POST CONTRACT ----------
router.post("/", async (req, res) => {
  try {
    //
    const newContract = await createContract(req.body);
    res.status(201).send(newContract);
    //
  } catch (e) {
    res.status(400).send(ERROR, e);
  }
});

// ---------- PUT CONTRACT ----------
router.put("/:id", async (req, res) => {
  try {
    //
    const { id } = req.params;
    const updatedContract = await modifyContract(id, req.body);
    res.send(updatedContract);
    //
  } catch (e) {
    res.status(400).send(ERROR, e);
  }
});

// ---------- PUT CONTRACT (CANCEL) ----------
router.put("/:id", async (req, res) => {
  try {
    //
    const { id } = req.params;
    const canceledContract = await cancelContract(id);
    res.send(canceledContract);
    //
  } catch (e) {
    res.status(400).send(ERROR, e);
  }
});

// ---------- DELETE CONTRACTS ----------
router.delete("/:id", async (req, res) => {
  try {
    //
    const { id } = req.params;
    await deleteContract(id);
    res.send(`Contrato eliminado exitosamente`);
    //
  } catch (e) {
    res.status(400).send(ERROR, e);
  }
});

module.exports = router;
