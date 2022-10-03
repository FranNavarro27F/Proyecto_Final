const initialState = {
  contrato: {},
  detalleContrato: {},
};

export default function contracts(state = initialState, action) {
  switch (action.type) {
    case "SETEO_CONTRATO_GLOBAL":
      return {
        ...state,
        contrato: action.payload,
      };

    case "GET_ID_CONTRATO":
      return {
        ...state,
        detalleContrato: action.payload,
      };

    case "RESET_CONTRACT":
      return {
        ...state,
        detalleContrato: {},
      };

    default:
      return state;
  }
}
