
 //---esta funcion evalua que contratos pueden o no mostrarse -----------------------
 const contratosVisibles = (contratos, user) => {
    let visibles = contratos.filter((cur) => {
      if (cur.status === "Concluido") {
        return true;
      }
      if (cur.employer === user.user_id) {
        return true;
      }
      if (cur.developer === user.user_id) {
        return true;
      } else {
        return false;
      }
    });
    return visibles;
  };

module.exports={
    contratosVisibles
}