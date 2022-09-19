function validaciones(input) {
  const errors = {};
  //name
  if (input.name === "") errors.name = "Ingresa tu nombre!";
  if (/[^\w\s]/.test(input.name))
    errors.name = "El nombre no debe contener caracteres especiales!";
  if (/[1-9]/.test(input.name))
    errors.name = "El nombre no debe contener numeros!";
  if (/[\s]/.test(input.name))
    errors.name = "El nombre no debe contener espacios!";
  //lastName
  if (input.lastName === "") errors.lastName = "Ingresa tu apellido!";
  if (/[^\w\s]/.test(input.lastName))
    errors.lastName = "El apellido no debe contener caracteres especiales!";
  if (/[1-9]/.test(input.lastName))
    errors.lastName = "El apellido no debe contener numeros!";
  if (/[\s]/.test(input.lastName))
    errors.lastName = "El apellido no debe contener espacios!";
  //image
  // if (input.profilePicture === "")
  //   errors.profilePicture = "Ingresa una url de tu imagen!";
  // if (/[\s]/.test(input.profilePicture))
  //   errors.profilePicture = "El url no debe contener espacios!";
  // if (!/\.(jpg|png|gif)$/i.test(input.profilePicture))
  //   errors.profilePicture = "El url que intentas colocar no es valida";
  //email
  if (input.email === "") errors.email = "Ingresa tu email!";
  if (/[\s]/.test(input.email))
    errors.email = "El email no debe contener espacios!";
  if (!/^\S+@\S+\.\S+$/.test(input.email))
    errors.email = "El email que intentas colocar no es valido";
  //linkedin
  if (input.linkedIn === "") errors.linkedIn = "Ingresa la url de tu linkedin!";
  if (/[\s]/.test(input.linkedIn))
    errors.linkedIn = "El url no debe contener espacios!";

  if (!/linkedin/i.test(input.linkedIn))
    errors.linkedIn = "Ingresa una url de LinkedIn correcta!";
  if (
    !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
      input.linkedIn
    )
  )
    errors.linkedIn = "Ingresa una url correcta!";
  //GitHub
  if (input.gitHub === "") errors.gitHub = "Ingresa la url de tu gitHub!";
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

  //Website
  if (input.webSite === "") errors.webSite = "Ingresa la url de tu webSite!";
  if (/[\s]/.test(input.webSite))
    errors.webSite = "El url no debe contener espacios!";

  if (
    !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
      input.webSite
    )
  )
    errors.webSite = "El url que intentas colocar no es valida";
  //yearsOfExperience
  if (input.yearsOfExperience === 0)
    errors.yearsOfExperience = "El valor no puede ser 0!";
  if (input.yearsOfExperience > 99 || input.yearsOfExperience < 1)
    errors.yearsOfExperience = "El valor debe estar entre 1 y 99";
  //dailyBudget
  if (input.dailyBudget === 0) errors.dailyBudget = "El valor no puede ser 0!";
  if (input.dailyBudget > 999 || input.dailyBudget < 1)
    errors.dailyBudget = "El valor debe estar entre 1 y 999";

  //countrie
  if (!input.paiseId?.length) errors.countries = "Ingresa un pais!";
  // tecnologias;
  if (!input.tecnologias?.length)
    errors.tecnologies = "Ingresa al menos una tecnologia!";
  //lenguajes
  if (!input.lenguajes?.length)
    errors.languajes = "Ingresa al menos un lenguaje!";
  //servicios
  if (!input.servicios?.length)
    errors.services = "Ingresa al menos un servicio!";

  return errors;
}

module.exports = {
  validaciones,
};
