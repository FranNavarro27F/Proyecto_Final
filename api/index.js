// 88888b.  888d888  .d88b.   .d88b.  888d888  8888b.  88888b.d88b.   8888b.  888  888
// 888 "88b 888P"   d88""88b d88P"88b 888P"       "88b 888 "888 "88b     "88b `Y8bd8P'
// 888  888 888     888  888 888  888 888     .d888888 888  888  888 .d888888   X88K
// 888 d88P 888     Y88..88P Y88b 888 888     888  888 888  888  888 888  888 .d8""8b.
// 88888P"  888      "Y88P"   "Y88888 888     "Y888888 888  888  888 "Y888888 888  888
// 888                            888
// 888                       Y8b d88P
// 888                        "Y88P"


const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { jsonPaises } = require("./src/controllers/Paises/index");
const {
  guardarTecnologiasDB,
} = require("./src/controllers/Tecnologias/index.js");
const {
  guardarServiciosEnDB,
} = require("./src/controllers/Servicios/index.js");
const { saveLanguages } = require("./src/controllers/Lenguajes/index");


// ------------------------------------

conn.sync({ alter: true }).then(() => {
  const PORT = 3001;

  // ------------------------------------

  server.listen(process.env.PORT || PORT, async () => {
    const port = process.env.PORT ? process.env.PORT : PORT;

    console.log(
      `\n┌────────────────────────────┐\n` +
        `│     ＰＲＯＧＲＡＭＡＸ     │\n` +
        `└────────────────────────────┘\n` +
        `Server listening at port:`,
      port
    );
    await jsonPaises();
    await guardarServiciosEnDB();
    await saveLanguages();
    await guardarTecnologiasDB();
    console.log(`──────────────────────────────\n`);
  });
});
