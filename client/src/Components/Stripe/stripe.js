import React, { useState } from 'react';
import {loadStripe} from '@stripe/stripe-js'
import {Elements, CardElement, useStripe, useElements}from '@stripe/react-stripe-js'
import axios from 'axios';
import Contracts from '../Contracts/Contracts';
import { useSelector } from 'react-redux';
//import s from "../Stripe/Stripe.module.css"
//import Loader from '../'


const stripePromise = loadStripe(
  "pk_test_51LkCysDY7badEkJlVHwO1YH6PAadDqJhLVBXU40OKbatMXVjhsvt62GfC5L0dFqWvyvrZhNDkvMwHgoXjagMPBao00IMNcQLid"
);

const CheckOutForm = () => {
  const stripe = useStripe();
  const element = useElements();
  //const [loading, setLoading] =useState(false);
 let contrato = useSelector((state)=> state.countries.contrato)
 console.log(contrato, "ACACONTRATOOOOO")



  const handleSubmit = async (e) => {
    e.preventDefault();
    
  const {error, paymentMethod} = await stripe.createPaymentMethod({
    type: 'card',
    card: element.getElement(CardElement)

  });

  //setLoading(true)

  if (!error){
    try {
      console.log(paymentMethod)
      const { id } = paymentMethod;
      console.log(id, "holi")
      const info  = await axios.post('http://localhost:3001/checkout',{
        ...contrato,
        payment_id: id
      })  
      

      element.getElement(CardElement).clear();
    } catch (error) {
      //console.log(info)
      console.log(error)      
    }
    //setLoading(true)
    }
 };
 
  return (
    // <div className={s.backgroundC}>
    <div>
  <form onSubmit={handleSubmit} >
    {/* <div className={s.cardEle}>
    <div className={s.textCard}>
       */}
    <CardElement />
    {/* </div>  
    </div> */}
   <button  disabled={!stripe}>
    {/* loading ? (
      <Loader/>
    ) : ("Contratar") */}
    Contratar
    </button>
  </form>
  </div>
  );
};

function Stripe() {
  return (
    <div>
      <Contracts/>
    <Elements stripe={stripePromise}>
      <div>
        
        <CheckOutForm />
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
