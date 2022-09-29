const initialState = {
  Subscription: [],
  Payment: [],
  PaymentConsult: [],
  SubscriptionConsult: [],
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
    case "MP_PAYMENT_CONSULT":
      return {
        ...state,
        PaymentConsult: action.payload,
      };
    case "MP_SUBSCRIPTION_CONSULT":
      return {
        ...state,
        SubscriptionConsult: action.payload,
      };

    default:
      return state;
  }
}
