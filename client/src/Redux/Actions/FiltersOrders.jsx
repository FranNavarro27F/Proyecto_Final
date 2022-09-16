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
}
