export function setCurrentPage(payload) {
  return {
    type: "SET_CURRENT_PAGE",
    payload: payload,
  };
}

export function devPerPage(payload) {
  return {
    type: "DEV_PER_PAGE",
    payload,
  };
}
