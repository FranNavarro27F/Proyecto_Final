const initialState = {
  Subscription: [],
  Payment: [],
};

export default function services(state = initialState, action) {
  switch (action.type) {
    case "MP_PAYMENT":
      return {
        ...state,
        Subscription: action.payload,
      };

    case "MP_SUBSCRIPTION":
      return {
        ...state,
        Payment: action.payload,
      };

    default:
      return state;
  }
}
