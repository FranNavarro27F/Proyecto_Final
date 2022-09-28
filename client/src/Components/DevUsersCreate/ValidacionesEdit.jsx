function validacionesEdit(input) {
  const errors = {};
  //name

  if (/[^\w\s]/.test(input.name))
    errors.name = "El nombre no debe contener caracteres especiales!";
  if (/[1-9]/.test(input.name))
    errors.name = "El nombre no debe contener numeros!";
  if (/[\s]/.test(input.name))
    errors.name = "El nombre no debe contener espacios!";
  //lastName

  if (/[^\w\s]/.test(input.lastName))
    errors.lastName = "El apellido no debe contener caracteres especiales!";
  if (/[1-9]/.test(input.lastName))
    errors.lastName = "El apellido no debe contener numeros!";
  if (/[\s]/.test(input.lastName))
    errors.lastName = "El apellido no debe contener espacios!";
  //image

  if (/[\s]/.test(input.email))
    errors.email = "El email no debe contener espacios!";

  //linkedin
  if (input.linkedin) {
    if (/[\s]/.test(input.linkedIn))
      errors.linkedIn = "El url no debe contener espacios!";

    if (input.linkedin) {
      if (!/linkedin/i.test(input.linkedIn))
        errors.linkedIn = "Ingresa una url de LinkedIn correcta!";
      if (
        !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
          input.linkedIn
        )
      )
        errors.linkedIn = "Ingresa una url correcta!";
    }
  }
  //GitHub
  if (input.github) {
    if (/[\s]/.test(input.gitHub))
      errors.gitHub = "El url no debe contener espacios!";
    if (
      !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
        input.gitHub
      )
    )
      errors.gitHub = "Ingresa una url correcta!";
    if (!/github/i.test(input.gitHub))
      errors.gitHub = "Ingresa una url de GitHub correcta!";
  }
  //Website
  if (input.webSite) {
    if (/[\s]/.test(input.webSite))
      errors.webSite = "El url no debe contener espacios!";

    if (
      !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
        input.webSite
      )
    )
      errors.webSite = "El url que intentas colocar no es valida";
  }
  //yearsOfExperience
  if (input.yearsOfExperience) {
    if (input.yearsOfExperience > 99 || input.yearsOfExperience < 0)
      errors.yearsOfExperience = "El valor debe estar entre 1 y 99";
    //dailyBudget
  }

  if (input.dailyBudget) {
    if (input.dailyBudget > 999 || input.dailyBudget < 0)
      errors.dailyBudget = "El valor debe estar entre 1 y 999";
  }

  //countrie
  if (input.paiseID) {
    if (input?.paiseId === "") errors.paiseId = "Ingresa un pais!";
  }
  return errors;
}

module.exports = {
  validacionesEdit,
};
