const { Lenguajes } = require("../db");
// const { Op } = require("sequelize");

const PATH = "/lenguajes";
const ERROR = "Error @ controllers/lenguajes";

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

// Guardar Tecnologias en la DB
const saveLanguages = async (content) => {
  try {
  } catch (e) {}
};

module.exports = { saveLanguages };
