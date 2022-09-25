//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

// Syncing all the models at once.
// console.log(conn);
conn.sync({ alter: true }).then(() => {
  const PORT = 3001;

  server.listen(process.env.PORT || PORT, async () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
    await jsonPaises();

    await guardarTecnologiasDB();
    await guardarServiciosEnDB();
    await saveLanguages();
  });
});
