
export function filtersOrders(payload) {
      try {
        console.log("entre al try de la acction", payload)
      return({
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

