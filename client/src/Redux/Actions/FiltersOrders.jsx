export function filtersOrders(payload) {
  try {
    return {
      type: "FILTERS_ORDERS",
      payload: payload,
    };
  } catch (error) {
    console.error(
      error.message,
      "error en los filtros, ordenamientos: actions"
    );
  }
};

export function searchInput(payload) {
  return function (dispatch){
    // console.log(payload)
    return dispatch({
      type: "SEARCH_INPUT",
      payload: payload
    })
  }
}
