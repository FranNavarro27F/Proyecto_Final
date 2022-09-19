function validaciones(input) {
  const errors = {};
  //name
  if (input.name === "") errors.name = "Ingresa tu nombre!";
  else if (/[^\w\s]/.test(input.name))
    errors.name = "El nombre no debe contener caracteres especiales!";
  else if (/[1-9]/.test(input.name))
    errors.name = "El nombre no debe contener numeros!";
  else if (/[\s]/.test(input.name))
    errors.name = "El nombre no debe contener espacios!";
  //lastName
  else if (input.lastName === "") errors.lastName = "Ingresa tu apellido!";
  else if (/[^\w\s]/.test(input.lastName))
    errors.lastName = "El apellido no debe contener caracteres especiales!";
  else if (/[1-9]/.test(input.lastName))
    errors.lastName = "El apellido no debe contener numeros!";
  else if (/[\s]/.test(input.lastName))
    errors.lastName = "El apellido no debe contener espacios!";
  //image
  // if (input.profilePicture === "")
  //   errors.profilePicture = "Ingresa una url de tu imagen!";
  // if (/[\s]/.test(input.profilePicture))
  //   errors.profilePicture = "El url no debe contener espacios!";
  // if (!/\.(jpg|png|gif)$/i.test(input.profilePicture))
  //   errors.profilePicture = "El url que intentas colocar no es valida";
  //email
  else if (input.email === "") errors.email = "Ingresa tu email!";
  else if (/[\s]/.test(input.email))
    errors.email = "El email no debe contener espacios!";
    else if (!/^\S+@\S+\.\S+$/.test(input.email))
    errors.email = "El email que intentas colocar no es valido";
  //linkedin
  else if (input.linkedIn === "") errors.linkedIn = "Ingresa la url de tu linkedin!";
  else if (/[\s]/.test(input.linkedIn))
    errors.linkedIn = "El url no debe contener espacios!";

    else if (!/linkedin/i.test(input.linkedIn))
    errors.linkedIn = "Ingresa una url de LinkedIn correcta!";
    else if (
    !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
      input.linkedIn
    )
  )
    errors.linkedIn = "Ingresa una url correcta!";
  //GitHub
  else if (input.gitHub === "") errors.gitHub = "Ingresa la url de tu gitHub!";
  else if (/[\s]/.test(input.gitHub))
    errors.gitHub = "El url no debe contener espacios!";
    else if (
    !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
      input.gitHub
    )
  )
    errors.gitHub = "Ingresa una url correcta!";
    else if (!/github/i.test(input.gitHub))
    errors.gitHub = "Ingresa una url de GitHub correcta!";

  //Website
  else if (input.webSite === "") errors.webSite = "Ingresa la url de tu webSite!";
  else if (/[\s]/.test(input.webSite))
    errors.webSite = "El url no debe contener espacios!";

    else if (
    !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
      input.webSite
    )
  )
    errors.webSite = "El url que intentas colocar no es valida";
  //yearsOfExperience
  else if (input.yearsOfExperience === 0)
    errors.yearsOfExperience = "El valor no puede ser 0!";
    else if (input.yearsOfExperience > 99 || input.yearsOfExperience < 1)
    errors.yearsOfExperience = "El valor debe estar entre 1 y 99";
  //dailyBudget
  else if (input.dailyBudget === 0) errors.dailyBudget = "El valor no puede ser 0!";
  else if (input.dailyBudget > 999 || input.dailyBudget < 1)
    errors.dailyBudget = "El valor debe estar entre 1 y 999";

  //countrie
  else if (!input.paiseId?.length) errors.countries = "Ingresa un pais!";
  // tecnologias;
  else if (!input.tecnologias?.length)
    errors.tecnologies = "Ingresa al menos una tecnologia!";
  //lenguajes
  else if (!input.lenguajes?.length)
    errors.languajes = "Ingresa al menos un lenguaje!";
  //servicios
  else if (!input.servicios?.length)
    errors.services = "Ingresa al menos un servicio!";

  return errors;
}

module.exports = {
  validaciones,
};
