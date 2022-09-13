const { Lenguajes } = require("../../db");
// const { Op } = require("sequelize");

const ERROR = "Error @ controllers/Lenguajes";

// -----------------------------------------------

const LENGUAJES = [
  "ABAP",
  "Ada",
  "Apex",
  "Assembly Language",
  "Bash",
  "C#",
  "C++",
  "C",
  "Clojure",
  "Cobol",
  "D",
  "Dart",
  "Delphi",
  "F#",
  "Fortran",
  "FoxPro",
  "G/LabVIEW",
  "Go",
  "Groovy",
  "Haskell",
  "Java",
  "JavaScript",
  "Julia",
  "Kotlin",
  "Ladder Logic",
  "Lisp",
  "Logo",
  "Lua",
  "Matlab",
  "Nim",
  "Objective-C",
  "Pascal",
  "Perl",
  "PHP",
  "PL/SQL",
  "Prolog",
  "Python",
  "R",
  "Ruby",
  "Rust",
  "SAS",
  "Scala",
  "Scheme",
  "Scratch",
  "SQL",
  "Swift",
  "Transact-SQL",
  "TypeScript",
  "VBA",
  "VBScript",
  "VHDL",
  "Visual Basic",
];

// -----------------------------------------------

// Guardar Lenguajes Iniciales en la DB
const saveLanguages = async (content) => {
  try {
  } catch (e) {}
};

// Guardar un nuevo lenguaje en la DB
const saveLanguage = async (language) => {
  try {
  } catch (e) {}
};

// Ver JSON de todos los lenguajes de programación
const getLanguages = async () => {
  try {
  } catch (e) {}
};

// Modificar un lenguaje de la DB
const modifyLanguage = async ({ id, content }) => {
  try {
  } catch (e) {}
};

// Eliminar un lenguaje de la DB
const deleteLanguage = async (id) => {
  try {
  } catch (e) {}
};

module.exports = {
  saveLanguages,
  saveLanguage,
  getLanguages,
  modifyLanguage,
  deleteLanguage,
};
