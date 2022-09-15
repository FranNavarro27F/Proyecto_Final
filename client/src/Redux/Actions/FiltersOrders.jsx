
export function filtersOrders(payload) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: "FILTERS_ORDERS",
        payload: payload,
      });
    } catch (error) {
      console.error(
        error.message,
        "error en los filtros, ordenamientos: actions"
      );
    }
  };
}
