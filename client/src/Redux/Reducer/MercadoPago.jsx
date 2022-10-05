const initialState = {
  Subscription: [],
  Payment: [],
  PaymentConsult: [],
  SubscriptionConsult: [],
  putSubscription: [],
};

export default function mercadoPago(state = initialState, action) {
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
    case "MP_SET_SUSCRIPTION_ID":
      return {
        ...state,
        putSubscription: action.payload,
      };
    case "SUBSCRIPTION_RESET":
      return {
        ...state,
        putSubscription: [],
        Subscription: [],
      };

    default:
      return state;
  }
}
