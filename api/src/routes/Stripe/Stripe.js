const { Router } = require("express");

const Stripe = require('stripe')
const cors = require('cors');
const { Contratos } = require("../../db")
const router = Router();

//a esta clave la podemos poner en una variable de entorno
 const stripe = new Stripe('sk_test_51LkCysDY7badEkJlamkZPnFP3RBDv8JiK3uH9Ppv0BKxIinBUfz1I7wopdGtVUZcRXCUv8amtBvF2NxDYZNEhMRJ00mPeWn11N')

router.use (cors({origin: "https://programax.vercel.app"}))

router.post('/', async (req, res) =>{
  try{
  //aca me traigo todas las props del pago
  const { 
    description,
    date,
    expiration_date,
    price,
    id,
    employer,
    developer,
    status,
    payment_id,
    amount,
    currency

   } = req.body;
  console.log(req.body)

   //aca creo el pago en Stripe
  const payment = await stripe.paymentIntents.create({
    payment_method: id,
    amount,
    currency
    
  });
  console.log(payment)

  //aca creo el contrato en la Base de datos 
  const contrato = await Contratos.create({
    description,
    date,
    expiration_date,
    price,
    employer,
    developer,
    status,
    payment_id,
    
  })
  //console.log(contrato,"Este es el contrato que creee en BD")

  res.send({message: "Pago realizado con éxito"})
} catch(error){
  
  //console.log("***********",error, "este es el error de catch")
  res.send({message: error.raw.message})
}
})

module.exports = router;

// / This is your test secret API key
// const stripe = require('stripe')('sk_test_51LkCysDY7badEkJlamkZPnFP3RBDv8JiK3uH9Ppv0BKxIinBUfz1I7wopdGtVUZcRXCUv8amtBvF2NxDYZNEhMRJ00mPeWn11N');
// const express = require('express');


// const YOUR_DOMAIN = 'http://localhost:4242';

// router.post('/create-checkout-session', async (req, res) => {
//     // usamos clave de busqueda para obtener el precio$
//   const prices = await stripe.prices.list({
//     lookup_keys: [req.body.lookup_key],
//     expand: ['data.product'],
//   });
// //   creamos sesion Checkout
//   const session = await stripe.checkout.sessions.create({
//     billing_address_collection: 'auto',
//     line_items: [
//       {
//         price: prices.data[0].id,
//         // For metered billing, do not pass quantity
//         quantity: 1,

//       },
//     ],
//     mode: 'subscription',
//     // urls de confirmacion y de cancelacion
//     success_url: `${YOUR_DOMAIN}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
//     cancel_url: `${YOUR_DOMAIN}?canceled=true`,
//   });
// // redirecciona al checkout
//   res.redirect(303, session.url);
// });
// // -------------------------------------

// // crear sesion en el portal
// router.post('/create-portal-session', async (req, res) => {
//   // For demonstration purposes, we're using the Checkout session to retrieve the customer ID.
//   // Typically this is stored alongside the authenticated user in your database.
//   const { session_id } = req.body;
//   const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);

//   // This is the url to which the customer will be redirected when they are done
//   // managing their billing with the portal.
//   const returnUrl = YOUR_DOMAIN;

//   const portalSession = await stripe.billingPortal.sessions.create({
//     customer: checkoutSession.customer,
//     return_url: returnUrl,
//   });
// // redirige al portal
//   res.redirect(303, portalSession.url);
// });

// // ----------------------------------------

// router.post(
//   '/webhook',
//   express.raw({ type: 'application/json' }),
//   (request, response) => {
//     let event = request.body;
//     // Replace this endpoint secret with your endpoint's unique secret
//     // If you are testing with the CLI, find the secret by running 'stripe listen'
//     // If you are using an endpoint defined with the API or dashboard, look in your webhook settings
//     // at https://dashboard.stripe.com/webhooks
//     const endpointSecret = 'whsec_12345';
//     // Only verify the event if you have an endpoint secret defined.
//     // Otherwise use the basic event deserialized with JSON.parse
//     if (endpointSecret) {
//       // Get the signature sent by Stripe
//       const signature = request.headers['stripe-signature'];
//       try {
//         event = stripe.webhooks.constructEvent(
//           request.body,
//           signature,
//           endpointSecret
//         );
//       } catch (err) {
//         console.log(`⚠️  Webhook signature verification failed.`, err.message);
//         return response.sendStatus(400);
//       }
//     }
//     let subscription;
//     let status;
//     // Handle the event
//     switch (event.type) {
//       case 'customer.subscription.trial_will_end':
//         subscription = event.data.object;
//         status = subscription.status;
//         console.log(`Subscription status is ${status}.`);
//         // Then define and call a method to handle the subscription trial ending.
//         // handleSubscriptionTrialEnding(subscription);
//         break;
//       case 'customer.subscription.deleted':
//         subscription = event.data.object;
//         status = subscription.status;
//         console.log(`Subscription status is ${status}.`);
//         // Then define and call a method to handle the subscription deleted.
//         // handleSubscriptionDeleted(subscriptionDeleted);
//         break;
//       case 'customer.subscription.created':
//         subscription = event.data.object;
//         status = subscription.status;
//         console.log(`Subscription status is ${status}.`);
//         // Then define and call a method to handle the subscription created.
//         // handleSubscriptionCreated(subscription);
//         break;
//       case 'customer.subscription.updated':
//         subscription = event.data.object;
//         status = subscription.status;
//         console.log(`Subscription status is ${status}.`);
//         // Then define and call a method to handle the subscription update.
//         // handleSubscriptionUpdated(subscription);
//         break;
//       default:
//         // Unexpected event type
//         console.log(`Unhandled event type ${event.type}.`);
//     }
//     // Return a 200 response to acknowledge receipt of the event
//     response.send();
//   }
// );

// // router.listen(3001, () => console.log('Running on port 3001'));
// module.exports = router;
