import React from "react";
// import { Link } from "react-router-dom";
import s from "./Footer.module.css";
import PlanetaFooter1 from "./PlanetasFooter/PlanetaFooter1";

export default function Footer({ scrollToSeccion, work, home, landing }) {
  return (
    <div>
      <div className={s.Footer}>
        <PlanetaFooter1 />
        <div className={s.container}>
          <ul>
            <li onClick={() => scrollToSeccion(landing)} className={s.link}>
              BIENVENIDO
            </li>
            <li onClick={() => scrollToSeccion(home)} className={s.link}>
              INICIO
            </li>
            <li onClick={() => scrollToSeccion(home)} className={s.link}>
              ACERCA DE
            </li>
            <li onClick={() => scrollToSeccion(work)} className={s.link}>
              DESTACADOS
            </li>
          </ul>
          <br />
        </div>
        <svg
          className={s.svgFooter}
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect fill="#1C1C65" />
          {/* home */}

          {/* linea blanca con terms of service */}
          <rect
            x="53"
            y="300"
            width="1370"
            height="2"
            fill="white"
            fillOpacity="0.15"
          />
          <path
            d="M1149.86 323.575V324.97H1147.09V334H1145.38V324.97H1142.59V323.575H1149.86ZM1159.17 329.665C1159.17 329.975 1159.15 330.255 1159.11 330.505H1152.79C1152.84 331.165 1153.09 331.695 1153.53 332.095C1153.97 332.495 1154.51 332.695 1155.15 332.695C1156.07 332.695 1156.72 332.31 1157.1 331.54H1158.94C1158.69 332.3 1158.24 332.925 1157.58 333.415C1156.93 333.895 1156.12 334.135 1155.15 334.135C1154.36 334.135 1153.65 333.96 1153.02 333.61C1152.4 333.25 1151.91 332.75 1151.55 332.11C1151.2 331.46 1151.02 330.71 1151.02 329.86C1151.02 329.01 1151.19 328.265 1151.53 327.625C1151.88 326.975 1152.37 326.475 1152.99 326.125C1153.62 325.775 1154.34 325.6 1155.15 325.6C1155.93 325.6 1156.62 325.77 1157.23 326.11C1157.84 326.45 1158.32 326.93 1158.66 327.55C1159 328.16 1159.17 328.865 1159.17 329.665ZM1157.38 329.125C1157.37 328.495 1157.15 327.99 1156.71 327.61C1156.27 327.23 1155.72 327.04 1155.07 327.04C1154.48 327.04 1153.98 327.23 1153.56 327.61C1153.14 327.98 1152.89 328.485 1152.81 329.125H1157.38ZM1162.56 326.935C1162.81 326.515 1163.14 326.19 1163.55 325.96C1163.97 325.72 1164.46 325.6 1165.03 325.6V327.37H1164.6C1163.93 327.37 1163.42 327.54 1163.07 327.88C1162.73 328.22 1162.56 328.81 1162.56 329.65V334H1160.85V325.735H1162.56V326.935ZM1176.61 325.6C1177.26 325.6 1177.84 325.735 1178.35 326.005C1178.87 326.275 1179.28 326.675 1179.57 327.205C1179.87 327.735 1180.02 328.375 1180.02 329.125V334H1178.32V329.38C1178.32 328.64 1178.14 328.075 1177.77 327.685C1177.4 327.285 1176.89 327.085 1176.25 327.085C1175.61 327.085 1175.1 327.285 1174.72 327.685C1174.35 328.075 1174.17 328.64 1174.17 329.38V334H1172.47V329.38C1172.47 328.64 1172.29 328.075 1171.92 327.685C1171.55 327.285 1171.04 327.085 1170.4 327.085C1169.76 327.085 1169.25 327.285 1168.87 327.685C1168.5 328.075 1168.32 328.64 1168.32 329.38V334H1166.61V325.735H1168.32V326.68C1168.6 326.34 1168.95 326.075 1169.38 325.885C1169.81 325.695 1170.27 325.6 1170.76 325.6C1171.42 325.6 1172.01 325.74 1172.53 326.02C1173.05 326.3 1173.45 326.705 1173.73 327.235C1173.98 326.735 1174.37 326.34 1174.9 326.05C1175.43 325.75 1176 325.6 1176.61 325.6ZM1185.19 334.135C1184.54 334.135 1183.96 334.02 1183.44 333.79C1182.93 333.55 1182.52 333.23 1182.22 332.83C1181.92 332.42 1181.76 331.965 1181.74 331.465H1183.51C1183.54 331.815 1183.71 332.11 1184.01 332.35C1184.32 332.58 1184.7 332.695 1185.16 332.695C1185.64 332.695 1186.01 332.605 1186.27 332.425C1186.54 332.235 1186.68 331.995 1186.68 331.705C1186.68 331.395 1186.53 331.165 1186.23 331.015C1185.94 330.865 1185.47 330.7 1184.83 330.52C1184.21 330.35 1183.71 330.185 1183.32 330.025C1182.93 329.865 1182.59 329.62 1182.3 329.29C1182.02 328.96 1181.88 328.525 1181.88 327.985C1181.88 327.545 1182.01 327.145 1182.27 326.785C1182.53 326.415 1182.9 326.125 1183.38 325.915C1183.87 325.705 1184.43 325.6 1185.06 325.6C1186 325.6 1186.75 325.84 1187.32 326.32C1187.9 326.79 1188.21 327.435 1188.25 328.255H1186.54C1186.51 327.885 1186.36 327.59 1186.09 327.37C1185.82 327.15 1185.46 327.04 1185 327.04C1184.55 327.04 1184.2 327.125 1183.96 327.295C1183.72 327.465 1183.6 327.69 1183.6 327.97C1183.6 328.19 1183.68 328.375 1183.84 328.525C1184 328.675 1184.2 328.795 1184.43 328.885C1184.66 328.965 1185 329.07 1185.45 329.2C1186.05 329.36 1186.54 329.525 1186.92 329.695C1187.31 329.855 1187.64 330.095 1187.92 330.415C1188.2 330.735 1188.35 331.16 1188.36 331.69C1188.36 332.16 1188.23 332.58 1187.97 332.95C1187.71 333.32 1187.34 333.61 1186.86 333.82C1186.39 334.03 1185.83 334.135 1185.19 334.135ZM1197.69 334.135C1196.91 334.135 1196.2 333.96 1195.57 333.61C1194.94 333.25 1194.45 332.75 1194.09 332.11C1193.73 331.46 1193.55 330.71 1193.55 329.86C1193.55 329.02 1193.73 328.275 1194.1 327.625C1194.47 326.975 1194.98 326.475 1195.62 326.125C1196.26 325.775 1196.97 325.6 1197.76 325.6C1198.55 325.6 1199.27 325.775 1199.91 326.125C1200.55 326.475 1201.05 326.975 1201.42 327.625C1201.79 328.275 1201.98 329.02 1201.98 329.86C1201.98 330.7 1201.79 331.445 1201.41 332.095C1201.03 332.745 1200.51 333.25 1199.85 333.61C1199.2 333.96 1198.48 334.135 1197.69 334.135ZM1197.69 332.65C1198.13 332.65 1198.54 332.545 1198.92 332.335C1199.31 332.125 1199.62 331.81 1199.86 331.39C1200.1 330.97 1200.22 330.46 1200.22 329.86C1200.22 329.26 1200.11 328.755 1199.88 328.345C1199.65 327.925 1199.34 327.61 1198.96 327.4C1198.58 327.19 1198.17 327.085 1197.73 327.085C1197.29 327.085 1196.88 327.19 1196.5 327.4C1196.13 327.61 1195.84 327.925 1195.62 328.345C1195.4 328.755 1195.29 329.26 1195.29 329.86C1195.29 330.75 1195.51 331.44 1195.96 331.93C1196.42 332.41 1197 332.65 1197.69 332.65ZM1207.13 327.13H1205.6V334H1203.88V327.13H1202.9V325.735H1203.88V325.15C1203.88 324.2 1204.13 323.51 1204.63 323.08C1205.14 322.64 1205.93 322.42 1207.01 322.42V323.845C1206.49 323.845 1206.13 323.945 1205.92 324.145C1205.71 324.335 1205.6 324.67 1205.6 325.15V325.735H1207.13V327.13ZM1215.98 334.105C1215.28 334.105 1214.65 333.985 1214.09 333.745C1213.53 333.495 1213.09 333.145 1212.77 332.695C1212.45 332.245 1212.29 331.72 1212.29 331.12H1214.12C1214.16 331.57 1214.33 331.94 1214.64 332.23C1214.96 332.52 1215.41 332.665 1215.98 332.665C1216.57 332.665 1217.03 332.525 1217.36 332.245C1217.69 331.955 1217.85 331.585 1217.85 331.135C1217.85 330.785 1217.75 330.5 1217.54 330.28C1217.34 330.06 1217.08 329.89 1216.77 329.77C1216.47 329.65 1216.05 329.52 1215.51 329.38C1214.83 329.2 1214.28 329.02 1213.85 328.84C1213.43 328.65 1213.07 328.36 1212.77 327.97C1212.47 327.58 1212.32 327.06 1212.32 326.41C1212.32 325.81 1212.47 325.285 1212.77 324.835C1213.07 324.385 1213.49 324.04 1214.03 323.8C1214.57 323.56 1215.19 323.44 1215.9 323.44C1216.91 323.44 1217.74 323.695 1218.38 324.205C1219.03 324.705 1219.39 325.395 1219.46 326.275H1217.57C1217.54 325.895 1217.36 325.57 1217.03 325.3C1216.7 325.03 1216.26 324.895 1215.72 324.895C1215.23 324.895 1214.83 325.02 1214.52 325.27C1214.21 325.52 1214.06 325.88 1214.06 326.35C1214.06 326.67 1214.15 326.935 1214.34 327.145C1214.54 327.345 1214.79 327.505 1215.09 327.625C1215.39 327.745 1215.8 327.875 1216.32 328.015C1217.01 328.205 1217.57 328.395 1218 328.585C1218.44 328.775 1218.81 329.07 1219.11 329.47C1219.42 329.86 1219.58 330.385 1219.58 331.045C1219.58 331.575 1219.43 332.075 1219.14 332.545C1218.86 333.015 1218.45 333.395 1217.9 333.685C1217.36 333.965 1216.72 334.105 1215.98 334.105ZM1229.17 329.665C1229.17 329.975 1229.15 330.255 1229.11 330.505H1222.8C1222.85 331.165 1223.09 331.695 1223.53 332.095C1223.97 332.495 1224.51 332.695 1225.15 332.695C1226.07 332.695 1226.72 332.31 1227.1 331.54H1228.95C1228.7 332.3 1228.24 332.925 1227.58 333.415C1226.93 333.895 1226.12 334.135 1225.15 334.135C1224.36 334.135 1223.65 333.96 1223.02 333.61C1222.4 333.25 1221.91 332.75 1221.55 332.11C1221.2 331.46 1221.03 330.71 1221.03 329.86C1221.03 329.01 1221.2 328.265 1221.54 327.625C1221.89 326.975 1222.37 326.475 1222.99 326.125C1223.62 325.775 1224.34 325.6 1225.15 325.6C1225.93 325.6 1226.63 325.77 1227.24 326.11C1227.85 326.45 1228.32 326.93 1228.66 327.55C1229 328.16 1229.17 328.865 1229.17 329.665ZM1227.39 329.125C1227.38 328.495 1227.15 327.99 1226.71 327.61C1226.27 327.23 1225.73 327.04 1225.08 327.04C1224.49 327.04 1223.98 327.23 1223.56 327.61C1223.14 327.98 1222.89 328.485 1222.81 329.125H1227.39ZM1232.56 326.935C1232.81 326.515 1233.14 326.19 1233.55 325.96C1233.97 325.72 1234.47 325.6 1235.04 325.6V327.37H1234.6C1233.93 327.37 1233.42 327.54 1233.07 327.88C1232.73 328.22 1232.56 328.81 1232.56 329.65V334H1230.85V325.735H1232.56V326.935ZM1239.81 332.47L1242.15 325.735H1243.96L1240.81 334H1238.77L1235.64 325.735H1237.47L1239.81 332.47ZM1246.12 324.64C1245.81 324.64 1245.55 324.535 1245.34 324.325C1245.13 324.115 1245.03 323.855 1245.03 323.545C1245.03 323.235 1245.13 322.975 1245.34 322.765C1245.55 322.555 1245.81 322.45 1246.12 322.45C1246.42 322.45 1246.68 322.555 1246.89 322.765C1247.1 322.975 1247.2 323.235 1247.2 323.545C1247.2 323.855 1247.1 324.115 1246.89 324.325C1246.68 324.535 1246.42 324.64 1246.12 324.64ZM1246.96 325.735V334H1245.25V325.735H1246.96ZM1248.64 329.86C1248.64 329.01 1248.81 328.265 1249.15 327.625C1249.5 326.975 1249.98 326.475 1250.59 326.125C1251.2 325.775 1251.9 325.6 1252.69 325.6C1253.69 325.6 1254.51 325.84 1255.16 326.32C1255.82 326.79 1256.27 327.465 1256.5 328.345H1254.65C1254.5 327.935 1254.26 327.615 1253.93 327.385C1253.6 327.155 1253.19 327.04 1252.69 327.04C1251.99 327.04 1251.43 327.29 1251.01 327.79C1250.6 328.28 1250.39 328.97 1250.39 329.86C1250.39 330.75 1250.6 331.445 1251.01 331.945C1251.43 332.445 1251.99 332.695 1252.69 332.695C1253.68 332.695 1254.33 332.26 1254.65 331.39H1256.5C1256.26 332.23 1255.81 332.9 1255.15 333.4C1254.49 333.89 1253.67 334.135 1252.69 334.135C1251.9 334.135 1251.2 333.96 1250.59 333.61C1249.98 333.25 1249.5 332.75 1249.15 332.11C1248.81 331.46 1248.64 330.71 1248.64 329.86ZM1265.78 329.665C1265.78 329.975 1265.76 330.255 1265.72 330.505H1259.4C1259.45 331.165 1259.7 331.695 1260.14 332.095C1260.58 332.495 1261.12 332.695 1261.76 332.695C1262.68 332.695 1263.33 332.31 1263.71 331.54H1265.55C1265.3 332.3 1264.85 332.925 1264.19 333.415C1263.54 333.895 1262.73 334.135 1261.76 334.135C1260.97 334.135 1260.26 333.96 1259.63 333.61C1259.01 333.25 1258.52 332.75 1258.16 332.11C1257.81 331.46 1257.63 330.71 1257.63 329.86C1257.63 329.01 1257.8 328.265 1258.14 327.625C1258.49 326.975 1258.98 326.475 1259.6 326.125C1260.23 325.775 1260.95 325.6 1261.76 325.6C1262.54 325.6 1263.23 325.77 1263.84 326.11C1264.45 326.45 1264.93 326.93 1265.27 327.55C1265.61 328.16 1265.78 328.865 1265.78 329.665ZM1263.99 329.125C1263.98 328.495 1263.76 327.99 1263.32 327.61C1262.88 327.23 1262.33 327.04 1261.68 327.04C1261.09 327.04 1260.59 327.23 1260.17 327.61C1259.75 327.98 1259.5 328.485 1259.42 329.125H1263.99ZM1277.7 327.85V329.29H1271.54V327.85H1277.7ZM1291.32 326.68C1291.32 327.21 1291.19 327.71 1290.94 328.18C1290.69 328.65 1290.29 329.035 1289.74 329.335C1289.19 329.625 1288.49 329.77 1287.63 329.77H1285.74V334H1284.03V323.575H1287.63C1288.43 323.575 1289.1 323.715 1289.65 323.995C1290.21 324.265 1290.63 324.635 1290.9 325.105C1291.18 325.575 1291.32 326.1 1291.32 326.68ZM1287.63 328.375C1288.28 328.375 1288.76 328.23 1289.08 327.94C1289.4 327.64 1289.56 327.22 1289.56 326.68C1289.56 325.54 1288.92 324.97 1287.63 324.97H1285.74V328.375H1287.63ZM1294.66 326.935C1294.91 326.515 1295.24 326.19 1295.65 325.96C1296.07 325.72 1296.56 325.6 1297.13 325.6V327.37H1296.7C1296.03 327.37 1295.52 327.54 1295.17 327.88C1294.83 328.22 1294.66 328.81 1294.66 329.65V334H1292.95V325.735H1294.66V326.935ZM1299.58 324.64C1299.27 324.64 1299.01 324.535 1298.8 324.325C1298.59 324.115 1298.48 323.855 1298.48 323.545C1298.48 323.235 1298.59 322.975 1298.8 322.765C1299.01 322.555 1299.27 322.45 1299.58 322.45C1299.88 322.45 1300.13 322.555 1300.34 322.765C1300.55 322.975 1300.66 323.235 1300.66 323.545C1300.66 323.855 1300.55 324.115 1300.34 324.325C1300.13 324.535 1299.88 324.64 1299.58 324.64ZM1300.42 325.735V334H1298.71V325.735H1300.42ZM1305.86 332.47L1308.2 325.735H1310.01L1306.86 334H1304.82L1301.69 325.735H1303.52L1305.86 332.47ZM1310.73 329.83C1310.73 329 1310.9 328.265 1311.24 327.625C1311.59 326.985 1312.06 326.49 1312.65 326.14C1313.25 325.78 1313.91 325.6 1314.63 325.6C1315.28 325.6 1315.85 325.73 1316.33 325.99C1316.82 326.24 1317.21 326.555 1317.5 326.935V325.735H1319.22V334H1317.5V332.77C1317.21 333.16 1316.81 333.485 1316.31 333.745C1315.81 334.005 1315.24 334.135 1314.6 334.135C1313.89 334.135 1313.24 333.955 1312.65 333.595C1312.06 333.225 1311.59 332.715 1311.24 332.065C1310.9 331.405 1310.73 330.66 1310.73 329.83ZM1317.5 329.86C1317.5 329.29 1317.38 328.795 1317.14 328.375C1316.91 327.955 1316.6 327.635 1316.22 327.415C1315.84 327.195 1315.43 327.085 1314.99 327.085C1314.55 327.085 1314.14 327.195 1313.76 327.415C1313.38 327.625 1313.07 327.94 1312.83 328.36C1312.6 328.77 1312.49 329.26 1312.49 329.83C1312.49 330.4 1312.6 330.9 1312.83 331.33C1313.07 331.76 1313.38 332.09 1313.76 332.32C1314.15 332.54 1314.56 332.65 1314.99 332.65C1315.43 332.65 1315.84 332.54 1316.22 332.32C1316.6 332.1 1316.91 331.78 1317.14 331.36C1317.38 330.93 1317.5 330.43 1317.5 329.86ZM1320.9 329.86C1320.9 329.01 1321.07 328.265 1321.41 327.625C1321.76 326.975 1322.24 326.475 1322.85 326.125C1323.46 325.775 1324.16 325.6 1324.95 325.6C1325.95 325.6 1326.77 325.84 1327.42 326.32C1328.08 326.79 1328.53 327.465 1328.76 328.345H1326.91C1326.76 327.935 1326.52 327.615 1326.19 327.385C1325.86 327.155 1325.45 327.04 1324.95 327.04C1324.25 327.04 1323.69 327.29 1323.27 327.79C1322.86 328.28 1322.65 328.97 1322.65 329.86C1322.65 330.75 1322.86 331.445 1323.27 331.945C1323.69 332.445 1324.25 332.695 1324.95 332.695C1325.94 332.695 1326.59 332.26 1326.91 331.39H1328.76C1328.52 332.23 1328.07 332.9 1327.41 333.4C1326.75 333.89 1325.93 334.135 1324.95 334.135C1324.16 334.135 1323.46 333.96 1322.85 333.61C1322.24 333.25 1321.76 332.75 1321.41 332.11C1321.07 331.46 1320.9 330.71 1320.9 329.86ZM1337.9 325.735L1332.83 337.885H1331.06L1332.74 333.865L1329.49 325.735H1331.39L1333.72 332.035L1336.13 325.735H1337.9ZM1350.38 326.68C1350.38 327.21 1350.26 327.71 1350.01 328.18C1349.76 328.65 1349.36 329.035 1348.81 329.335C1348.26 329.625 1347.55 329.77 1346.69 329.77H1344.8V334H1343.09V323.575H1346.69C1347.49 323.575 1348.17 323.715 1348.72 323.995C1349.28 324.265 1349.69 324.635 1349.96 325.105C1350.24 325.575 1350.38 326.1 1350.38 326.68ZM1346.69 328.375C1347.34 328.375 1347.83 328.23 1348.15 327.94C1348.47 327.64 1348.63 327.22 1348.63 326.68C1348.63 325.54 1347.98 324.97 1346.69 324.97H1344.8V328.375H1346.69ZM1355.6 334.135C1354.82 334.135 1354.11 333.96 1353.48 333.61C1352.85 333.25 1352.36 332.75 1352 332.11C1351.64 331.46 1351.46 330.71 1351.46 329.86C1351.46 329.02 1351.64 328.275 1352.01 327.625C1352.38 326.975 1352.89 326.475 1353.53 326.125C1354.17 325.775 1354.88 325.6 1355.67 325.6C1356.46 325.6 1357.18 325.775 1357.82 326.125C1358.46 326.475 1358.96 326.975 1359.33 327.625C1359.7 328.275 1359.89 329.02 1359.89 329.86C1359.89 330.7 1359.7 331.445 1359.32 332.095C1358.94 332.745 1358.42 333.25 1357.76 333.61C1357.11 333.96 1356.39 334.135 1355.6 334.135ZM1355.6 332.65C1356.04 332.65 1356.45 332.545 1356.83 332.335C1357.22 332.125 1357.53 331.81 1357.77 331.39C1358.01 330.97 1358.13 330.46 1358.13 329.86C1358.13 329.26 1358.02 328.755 1357.79 328.345C1357.56 327.925 1357.25 327.61 1356.87 327.4C1356.49 327.19 1356.08 327.085 1355.64 327.085C1355.2 327.085 1354.79 327.19 1354.41 327.4C1354.04 327.61 1353.75 327.925 1353.53 328.345C1353.31 328.755 1353.2 329.26 1353.2 329.86C1353.2 330.75 1353.42 331.44 1353.87 331.93C1354.33 332.41 1354.91 332.65 1355.6 332.65ZM1363.29 322.9V334H1361.58V322.9H1363.29ZM1366.4 324.64C1366.09 324.64 1365.83 324.535 1365.62 324.325C1365.41 324.115 1365.31 323.855 1365.31 323.545C1365.31 323.235 1365.41 322.975 1365.62 322.765C1365.83 322.555 1366.09 322.45 1366.4 322.45C1366.7 322.45 1366.96 322.555 1367.17 322.765C1367.38 322.975 1367.48 323.235 1367.48 323.545C1367.48 323.855 1367.38 324.115 1367.17 324.325C1366.96 324.535 1366.7 324.64 1366.4 324.64ZM1367.24 325.735V334H1365.53V325.735H1367.24ZM1368.92 329.86C1368.92 329.01 1369.09 328.265 1369.43 327.625C1369.78 326.975 1370.26 326.475 1370.87 326.125C1371.48 325.775 1372.18 325.6 1372.97 325.6C1373.97 325.6 1374.79 325.84 1375.44 326.32C1376.1 326.79 1376.55 327.465 1376.78 328.345H1374.93C1374.78 327.935 1374.54 327.615 1374.21 327.385C1373.88 327.155 1373.47 327.04 1372.97 327.04C1372.27 327.04 1371.71 327.29 1371.29 327.79C1370.88 328.28 1370.67 328.97 1370.67 329.86C1370.67 330.75 1370.88 331.445 1371.29 331.945C1371.71 332.445 1372.27 332.695 1372.97 332.695C1373.96 332.695 1374.61 332.26 1374.93 331.39H1376.78C1376.54 332.23 1376.09 332.9 1375.43 333.4C1374.77 333.89 1373.95 334.135 1372.97 334.135C1372.18 334.135 1371.48 333.96 1370.87 333.61C1370.26 333.25 1369.78 332.75 1369.43 332.11C1369.09 331.46 1368.92 330.71 1368.92 329.86ZM1385.92 325.735L1380.85 337.885H1379.08L1380.76 333.865L1377.51 325.735H1379.41L1381.74 332.035L1384.15 325.735H1385.92Z"
            fill="white"
            fillOpacity="0.7"
          />

          {/* logo Google */}
          <g clip-path="url(#clip0_52_406)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M634.2 220.455C634.2 219.036 634.073 217.673 633.836 216.364H615V224.1H625.764C625.3 226.6 623.891 228.718 621.773 230.136V235.155H628.236C632.018 231.673 634.2 226.545 634.2 220.455Z"
              fill="#4285F4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M615 240C620.4 240 624.927 238.209 628.236 235.155L621.773 230.136C619.982 231.336 617.691 232.045 615 232.045C609.791 232.045 605.382 228.527 603.809 223.8H597.127V228.982C600.418 235.518 607.182 240 615 240Z"
              fill="#34A853"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M603.809 223.8C603.409 222.6 603.182 221.318 603.182 220C603.182 218.682 603.409 217.4 603.809 216.2V211.018H597.127C595.773 213.718 595 216.773 595 220C595 223.227 595.773 226.282 597.127 228.982L603.809 223.8Z"
              fill="#FBBC05"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M615 207.955C617.936 207.955 620.573 208.964 622.645 210.945L628.382 205.209C624.918 201.982 620.391 200 615 200C607.182 200 600.418 204.482 597.127 211.018L603.809 216.2C605.382 211.473 609.791 207.955 615 207.955Z"
              fill="#EA4335"
            />
          </g>
          {/* logo Linkedin */}
          <rect x="645" y="200" width="40" height="40" rx="20" fill="#0A66C2" />
          <path
            d="M674.376 209H655.624C655.193 209 654.78 209.171 654.476 209.476C654.171 209.78 654 210.193 654 210.624V229.376C654 229.807 654.171 230.22 654.476 230.524C654.78 230.829 655.193 231 655.624 231H674.376C674.807 231 675.22 230.829 675.524 230.524C675.829 230.22 676 229.807 676 229.376V210.624C676 210.193 675.829 209.78 675.524 209.476C675.22 209.171 674.807 209 674.376 209ZM660.557 227.741H657.25V217.235H660.557V227.741ZM658.901 215.779C658.526 215.777 658.16 215.663 657.849 215.453C657.538 215.243 657.296 214.946 657.154 214.599C657.012 214.251 656.976 213.87 657.051 213.502C657.125 213.134 657.307 212.797 657.573 212.533C657.839 212.268 658.178 212.088 658.546 212.016C658.914 211.944 659.296 211.982 659.642 212.127C659.988 212.271 660.284 212.515 660.492 212.827C660.7 213.139 660.811 213.506 660.811 213.881C660.814 214.132 660.767 214.382 660.672 214.614C660.578 214.847 660.437 215.058 660.259 215.235C660.08 215.412 659.868 215.552 659.635 215.645C659.402 215.738 659.152 215.784 658.901 215.779ZM672.749 227.75H669.443V222.011C669.443 220.318 668.723 219.795 667.794 219.795C666.813 219.795 665.851 220.535 665.851 222.053V227.75H662.543V217.242H665.724V218.698H665.767C666.086 218.052 667.205 216.948 668.911 216.948C670.757 216.948 672.75 218.043 672.75 221.251L672.749 227.75Z"
            fill="white"
          />
          {/* logo whatsapp */}
          <g clip-path="url(#clip1_52_406)">
            <path
              d="M695 240L697.827 229.734C696.079 226.721 695.162 223.308 695.172 219.819C695.172 208.888 704.112 200 715.086 200C720.415 200 725.42 202.063 729.174 205.808C732.937 209.553 735.01 214.534 735 219.829C735 230.76 726.06 239.648 715.076 239.648H715.067C711.734 239.648 708.457 238.812 705.544 237.234L695 240ZM706.051 233.65L706.652 234.011C709.193 235.513 712.106 236.302 715.076 236.312H715.086C724.207 236.312 731.638 228.926 731.638 219.838C731.638 215.437 729.919 211.302 726.796 208.184C723.672 205.067 719.508 203.356 715.086 203.356C705.965 203.346 698.534 210.732 698.534 219.819C698.534 222.928 699.403 225.96 701.065 228.584L701.457 229.211L699.785 235.285L706.051 233.65Z"
              fill="white"
            />
            <path
              d="M695.697 239.306L698.429 229.392C696.738 226.492 695.85 223.194 695.85 219.829C695.86 209.278 704.484 200.694 715.086 200.694C720.234 200.694 725.057 202.69 728.687 206.302C732.316 209.914 734.312 214.724 734.312 219.838C734.312 230.39 725.678 238.973 715.086 238.973H715.076C711.858 238.973 708.696 238.165 705.888 236.644L695.697 239.306Z"
              fill="url(#paint0_linear_52_406)"
            />
            <path
              d="M695 240L697.827 229.734C696.079 226.721 695.162 223.308 695.172 219.819C695.172 208.888 704.112 200 715.086 200C720.415 200 725.42 202.063 729.174 205.808C732.937 209.553 735.01 214.534 735 219.829C735 230.76 726.06 239.648 715.076 239.648H715.067C711.734 239.648 708.457 238.812 705.544 237.234L695 240ZM706.051 233.65L706.652 234.011C709.193 235.513 712.106 236.302 715.076 236.312H715.086C724.207 236.312 731.638 228.926 731.638 219.838C731.638 215.437 729.919 211.302 726.796 208.184C723.672 205.067 719.508 203.356 715.086 203.356C705.965 203.346 698.534 210.732 698.534 219.819C698.534 222.928 699.403 225.96 701.065 228.584L701.457 229.211L699.785 235.285L706.051 233.65Z"
              fill="url(#paint1_linear_52_406)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M710.11 211.53C709.737 210.703 709.346 210.684 708.992 210.675C708.706 210.665 708.371 210.665 708.037 210.665C707.703 210.665 707.168 210.789 706.709 211.283C706.251 211.778 704.971 212.975 704.971 215.418C704.971 217.852 706.757 220.209 707.006 220.542C707.254 220.875 710.454 226.036 715.506 228.023C719.709 229.677 720.568 229.344 721.475 229.259C722.383 229.173 724.417 228.061 724.837 226.901C725.248 225.741 725.248 224.753 725.124 224.544C725 224.335 724.666 224.211 724.169 223.964C723.672 223.717 721.227 222.519 720.769 222.348C720.31 222.186 719.976 222.101 719.651 222.595C719.317 223.089 718.362 224.202 718.075 224.534C717.789 224.867 717.493 224.905 716.996 224.658C716.499 224.411 714.895 223.888 712.994 222.196C711.514 220.884 710.511 219.259 710.224 218.764C709.938 218.27 710.196 218.004 710.444 217.757C710.664 217.538 710.941 217.177 711.189 216.892C711.437 216.606 711.523 216.397 711.686 216.065C711.848 215.732 711.772 215.447 711.647 215.2C711.523 214.962 710.549 212.51 710.11 211.53Z"
              fill="white"
            />
          </g>
          {/* logo rojo */}
          <g clip-path="url(#clip2_52_406)">
            <path
              d="M765 240C776.046 240 785 231.046 785 220C785 208.954 776.046 200 765 200C753.954 200 745 208.954 745 220C745 231.046 753.954 240 765 240Z"
              fill="#FF4500"
            />
            <path
              d="M778.333 220C778.333 218.386 777.023 217.076 775.409 217.076C774.614 217.076 773.912 217.38 773.398 217.895C771.409 216.468 768.649 215.532 765.608 215.415L766.941 209.17L771.269 210.082C771.316 211.181 772.228 212.07 773.351 212.07C774.497 212.07 775.433 211.135 775.433 209.988C775.433 208.842 774.497 207.906 773.351 207.906C772.532 207.906 771.83 208.374 771.503 209.076L766.661 208.047C766.52 208.023 766.38 208.047 766.263 208.117C766.146 208.187 766.076 208.304 766.029 208.444L764.555 215.415C761.444 215.509 758.661 216.421 756.649 217.895C756.134 217.404 755.409 217.076 754.637 217.076C753.023 217.076 751.713 218.386 751.713 220C751.713 221.193 752.415 222.199 753.444 222.667C753.398 222.947 753.374 223.251 753.374 223.556C753.374 228.047 758.591 231.673 765.047 231.673C771.503 231.673 776.719 228.047 776.719 223.556C776.719 223.251 776.696 222.971 776.649 222.69C777.608 222.222 778.333 221.193 778.333 220ZM758.333 222.082C758.333 220.936 759.269 220 760.415 220C761.561 220 762.497 220.936 762.497 222.082C762.497 223.228 761.561 224.164 760.415 224.164C759.269 224.164 758.333 223.228 758.333 222.082ZM769.959 227.579C768.532 229.006 765.819 229.099 765.023 229.099C764.228 229.099 761.491 228.982 760.088 227.579C759.877 227.368 759.877 227.018 760.088 226.807C760.298 226.596 760.649 226.596 760.86 226.807C761.748 227.696 763.667 228.023 765.047 228.023C766.427 228.023 768.322 227.696 769.234 226.807C769.444 226.596 769.795 226.596 770.006 226.807C770.17 227.041 770.17 227.368 769.959 227.579ZM769.585 224.164C768.439 224.164 767.503 223.228 767.503 222.082C767.503 220.936 768.439 220 769.585 220C770.731 220 771.667 220.936 771.667 222.082C771.667 223.228 770.731 224.164 769.585 224.164Z"
              fill="white"
            />
          </g>
          {/* este es el logo de figma */}
          <rect x="795" y="200" width="40" height="40" rx="20" fill="white" />
          <path
            d="M811 233C813.392 233 815.334 231.059 815.334 228.667V224.333H811C808.608 224.333 806.667 226.275 806.667 228.667C806.667 231.059 808.608 233 811 233Z"
            fill="#0ACF83"
          />
          <path
            d="M806.667 220C806.667 217.608 808.608 215.667 811 215.667H815.334V224.333H811C808.608 224.333 806.667 222.392 806.667 220Z"
            fill="#A259FF"
          />
          <path
            d="M806.667 211.333C806.667 208.941 808.608 207 811 207H815.334V215.667H811C808.608 215.667 806.667 213.725 806.667 211.333Z"
            fill="#F24E1E"
          />
          <path
            d="M815.333 207H819.667C822.059 207 824 208.941 824 211.333C824 213.725 822.059 215.667 819.667 215.667H815.333V207Z"
            fill="#FF7262"
          />
          <path
            d="M824 220C824 222.392 822.059 224.333 819.667 224.333C817.275 224.333 815.333 222.392 815.333 220C815.333 217.608 817.275 215.667 819.667 215.667C822.059 215.667 824 217.608 824 220Z"
            fill="#1ABCFE"
          />
          <defs>
            <linearGradient
              id="paint0_linear_52_406"
              x1="715.004"
              y1="239.304"
              x2="715.004"
              y2="200.693"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#20B038" />
              <stop offset="1" stopColor="#60D66A" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_52_406"
              x1="715.004"
              y1="239.996"
              x2="715.004"
              y2="200"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F9F9F9" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <clipPath id="clip0_52_406">
              <rect
                width="40"
                height="40"
                fill="white"
                transform="translate(595 200)"
              />
            </clipPath>
            <clipPath id="clip1_52_406">
              <rect
                width="40"
                height="40"
                fill="white"
                transform="translate(695 200)"
              />
            </clipPath>
            <clipPath id="clip2_52_406">
              <rect
                width="40"
                height="40"
                fill="white"
                transform="translate(745 200)"
              />
            </clipPath>
          </defs>
        </svg>
        <div className={s.supportContainer}>
          <span className={s.span}>
            ¿Tienes algún problema con el sitio o alguna sugerencia?
          </span>
          <span className={s.span}> Envíanos un correo a: </span>
          <a href="mailto:programaxsa@gmail.com" className={s.mailto}>
            programaxsa@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
