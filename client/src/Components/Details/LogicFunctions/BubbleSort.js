//---esta funcion compara la fecha actual contra le fecha ingresada e indica si es "-","+","=" ---
const compararFechas = (hoy, fechaAcomparar) => {
  let hoyy = hoy.split("-");
  let comp = fechaAcomparar.split("-");

  let año_hoyy = hoyy[0];
  let año_comp = comp[0];
  if (Number(año_comp) < Number(año_hoyy)) {
    return "-";
  }
  if (Number(año_comp) > Number(año_hoyy)) {
    return "+";
  }
  if (Number(año_comp) === Number(año_hoyy)) {
    let mes_hoy = hoyy[1];
    let mes_comp = comp[1];
    if (Number(mes_comp) < Number(mes_hoy)) {
      return "-";
    }
    if (Number(mes_comp) > Number(mes_hoy)) {
      return "+";
    }
    if (Number(mes_comp) === Number(mes_hoy)) {
      let dia_hoy = hoyy[2];
      let dia_comp = comp[2];
      if (Number(dia_comp) < Number(dia_hoy)) {
        return "-";
      }
      if (Number(dia_comp) > Number(dia_hoy)) {
        return "+";
      }
      if (Number(dia_comp) === Number(dia_hoy)) {
        return "=";
      }
    }
  }
};
//------------------------------------------------------------------------------------

//---- esta funcion ordena los contratos de mayor a menor--------------
function BubbleSort(array) {
  // el mas grande en indice 0, el mas chico al final;
  let swap = true;
  while (swap === true) {
    swap = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (compararFechas(array[i].date, array[i + 1].date) === "-") {
        let aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        swap = true;
      }
    }
  }
  return array;
}
//-----------------------------------------------------------------------

module.exports = {
  BubbleSort,
};
