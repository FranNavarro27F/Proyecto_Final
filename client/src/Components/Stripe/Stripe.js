import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
// import "bootswatch/dist/lux/bootstrap.min.css";
// import "bootswatch/dist/slate/bootstrap.min.css";

import Contracts from "../Contracts/Contracts";
import { useDispatch, useSelector } from "react-redux";
import { useFetchUsers } from "../../Hooks/useFetchUsers";
import { useAuth0 } from "@auth0/auth0-react";
import s from "../Stripe/Stripe.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import { getUserEmail } from "../../Redux/Actions/DevUser";
//import Loader from '../'
const stripePromise = loadStripe(
  "pk_test_51LkCysDY7badEkJlVHwO1YH6PAadDqJhLVBXU40OKbatMXVjhsvt62GfC5L0dFqWvyvrZhNDkvMwHgoXjagMPBao00IMNcQLid"
);

const CheckOutForm = ({ contrato }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const element = useElements();
  //const [loading, setLoading] =useState(false);
  const userDetail = useSelector((state) => state.devUser.details);

  let contratoA = useSelector((state) => state.contracts.contrato);
  console.log("Contrato seteado correctamente");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: element.getElement(CardElement),
      //prueba
    });

    //setLoading(true)

    if (!error) {
      try {
        console.log(paymentMethod, "paymentMethod id");
        const { id } = paymentMethod;
        console.log(id, paymentMethod, "Contrato y pago exitosos.");
        const info = await axios.post(
          "https://programax.up.railway.app/checkout" ||
            "http://localhost:3001/checkout",
          {
            ...contratoA,
            payment_id: id,
            id: id,
            currency: "usd",
            amount: contratoA.price,
          }
        );

        element.getElement(CardElement).clear();
      } catch (error) {
        //console.log(info)
        console.log(error);
      }
      //setLoading(true)
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className={s.cardEle}>
            <div className={s.textCard}>
              <div class="form-group">
                <label for="card-element" className={s.text}>
                  Credit or debit card
                </label>
                <div className={s.dataForm}>
                  <label for="">Descripcion: {contrato?.description}</label>
                  <label for="">Fecha de inicio: {contrato?.date}</label>
                  <label for="">
                    Fecha de finalizacion: {contrato?.expiration_date}
                  </label>
                  <label for="">Precio: {contrato?.price} USD</label>
                </div>

                <div id="card-element" className={`"form-control", ${s.asd}`}>
                  <div className={s.divChipCardSvg}>
                    <svg
                      width="65"
                      height="44"
                      viewBox="0 0 65 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="64.625"
                        height="44"
                        rx="8"
                        fill="url(#paint0_linear_2_12)"
                      />
                      <rect
                        x="40.4375"
                        y="7"
                        width="29.6562"
                        height="16.5938"
                        rx="8.29688"
                        transform="rotate(90 40.4375 7)"
                        stroke="#9A9797"
                        stroke-width="3"
                      />
                      <path
                        d="M-5.36887e-07 27.8437L16.9926 27.8437C19.9276 27.8437 22.3778 25.6047 22.6415 22.6816V22.6816C22.6721 22.3425 22.6721 22.0013 22.6415 21.6622V21.6622C22.3778 18.7391 19.9276 16.5 16.9926 16.5L4.54815e-07 16.5"
                        stroke="#9A9797"
                        stroke-width="3"
                      />
                      <path
                        d="M64.625 16.5L47.3289 16.5C44.5071 16.5 42.0856 18.5686 41.597 21.3477V21.3477C41.4822 22.0007 41.4842 22.6776 41.606 23.3293V23.3293C42.0949 25.9465 44.3794 27.8437 47.0418 27.8437L64.625 27.8437"
                        stroke="#9A9797"
                        stroke-width="3"
                      />
                      <line
                        x1="33.125"
                        x2="33.125"
                        y2="6.1875"
                        stroke="#9A9797"
                        stroke-width="3"
                      />
                      <line
                        x1="33.125"
                        y1="37.8125"
                        x2="33.125"
                        y2="44"
                        stroke="#9A9797"
                        stroke-width="3"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_2_12"
                          x1="-7.5625"
                          y1="28.1875"
                          x2="54.3125"
                          y2="28.1875"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#969090" />
                          <stop offset="1" stop-color="#F4E8E8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className={s.cardDetail}>
                  <CardElement />
                </div>
              </div>
            </div>
          </div>
          <div className={s.divButtons}>
            <button
              className={s.buttons}
              onClick={() => navigate(`/work/details/${userDetail?.id}`)}
            >
              VOLVER
            </button>
            <button className={s.buttons} disabled={!stripe}>
              {/* loading ? (
      <Loader/>
    ) : ("Contratar") */}
              PAGAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

function Stripe() {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  const { userByEmail } = useFetchUsers(user?.email);

  const userDetail = useSelector((state) => state.devUser.details);
  const employer1 = userByEmail?.id;

  const developer = userDetail?.id;
  const [contrato, setContrato] = useState({
    description: "",
    date: "",
    expiration_date: "",
    price: "",

    employer: employer1,
    developer: developer,
    status: "Activo",
    payment_id: "",
  });

  return (
    <div className={s.backgroundC}>
      <div>
        <Contracts
          idDesarroyador={userDetail?.id}
          idEmpleador={userByEmail?.id}
          contrato={contrato}
          setContrato={setContrato}
        />
      </div>

      <Elements stripe={stripePromise}>
        <div>
          <div className={s.checkOut}>
            <CheckOutForm contrato={contrato} setContrato={setContrato} />
          </div>
        </div>
      </Elements>
    </div>
  );
}

export default Stripe;

//---------------------------------------------------
// import React, { useState, useEffect } from 'react';

// const ProductDisplay = () => (
//   <section>
//     <div className="product">
//       <Logo />
//       <div className="description">
//         {/* crear las propias suscripciones */}
//         <h3>Starter plan</h3>
//         <h5>$20.00 / month</h5>
//       </div>
//     </div>
//     {/* agrego boton de pago */}
//     <form action="/create-checkout-session" method="POST">
//       {/* Add a hidden field with the lookup_key of your Price */}
//       {/* Cuando creaste un producto y un precio en el primer paso, se agregó la lookup_key. Al enviar el formulario, este se usa para recuperar el price_id en el servidor. */}
//       <input type="hidden" name="lookup_key" value="{{PRICE_LOOKUP_KEY}}" />
//       <button id="checkout-and-portal-button" type="submit">
//         Checkout
//       </button>
//     </form>
//   </section>
// );
// //---------------------------------------------

// // pag de confirmacion
// const SuccessDisplay = ({ sessionId }) => {
//   return (
//     <section>
//       <div className="product Box-root">
//         <Logo />
//         <div className="description Box-root">
//           <h3>Subscription to starter plan successful!</h3>
//         </div>
//       </div>
//       <form action="/create-portal-session" method="POST">
//         <input
//           type="hidden"
//           id="session-id"
//           name="session_id"
//           value={sessionId}
//         />
//         {/* //button para clientes */}
//         <button id="checkout-and-portal-button" type="submit">
//           Administrar informacion de facturacion
//         </button>
//       </form>
//     </section>
//   );
// };
// //-------------------------------

// const Message = ({ message }) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );

// export default function App() {
//   let [message, setMessage] = useState('');
//   let [success, setSuccess] = useState(false);
//   let [sessionId, setSessionId] = useState('');

//   useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);

//     if (query.get('success')) {
//       setSuccess(true);
//       setSessionId(query.get('session_id'));
//     }

//     if (query.get('canceled')) {
//       setSuccess(false);
//       setMessage(
//         "Order canceled -- continue to shop around and checkout when you're ready."
//       );
//     }
//   }, [sessionId]);

//   if (!success && message === '') {
//     return <ProductDisplay />;
//   } else if (success && sessionId !== '') {
//     return <SuccessDisplay sessionId={sessionId} />;
//   } else {
//     return <Message message={message} />;
//   }
// }

// const Logo = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     xmlnsXlink="http://www.w3.org/1999/xlink"
//     width="14px"
//     height="16px"
//     viewBox="0 0 14 16"
//     version="1.1"
//   >
//     <defs />
//     <g id="Flow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
//       <g
//         id="0-Default"
//         transform="translate(-121.000000, -40.000000)"
//         fill="#E184DF"
//       >
//         <path
//           d="M127,50 L126,50 C123.238576,50 121,47.7614237 121,45 C121,42.2385763 123.238576,40 126,40 L135,40 L135,56 L133,56 L133,42 L129,42 L129,56 L127,56 L127,50 Z M127,48 L127,42 L126,42 C124.343146,42 123,43.3431458 123,45 C123,46.6568542 124.343146,48 126,48 L127,48 Z"
//           id="Pilcrow"
//         />
//       </g>
//     </g>
//   </svg>
// );
