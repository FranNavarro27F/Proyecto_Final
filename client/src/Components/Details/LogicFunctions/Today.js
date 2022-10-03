
//-----esta funcion nos da la fecha de hoy en formato correcto-------
const theDay= ()=>{
   
    const today = new Date().toLocaleDateString({
        year: "numeric",
        month: "short",
        day: "numeric",
    });
    const setOrderDate = (today) => {
        let division = today.split("/");
        let dia = division[0];
        let mes = division[1];
        let año = division[2];
        division[0] = año;
        division[2] = dia;

        if (mes.length === 1) {
        mes = "0" + mes;
        }
        if (dia.length === 1) {
        dia = "0" + dia;
        }
        let fechaExacta = año + "-" + mes + "-" + dia;
        return fechaExacta;
    };
    return setOrderDate(today)
};
  //-----------------------------------------------------------------------

  module.exports={
    theDay
  }