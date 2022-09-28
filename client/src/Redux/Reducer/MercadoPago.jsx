const initialState = {
  Subscription: [],
  Payment: [],
};

export default function services(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case "MP_PAYMENT":
      return {
        ...state,
        Payment: action.payload,
      };

    case "MP_SUBSCRIPTION":
      return {
        ...state,
        Subscription: action.payload,
      };

    default:
      return state;
  }
}
