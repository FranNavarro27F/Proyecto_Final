// This is your test secret API key
const { Router } = require('express');
const stripe = require('stripe')('sk_test_51LkCysDY7badEkJlamkZPnFP3RBDv8JiK3uH9Ppv0BKxIinBUfz1I7wopdGtVUZcRXCUv8amtBvF2NxDYZNEhMRJ00mPeWn11N');

const YOUR_DOMAIN = 'http://localhost:3001';
const router = Router();


router.post('/create-checkout-session', async (req, res) => {
    // usamos clave de busqueda para obtener el precio$
  const prices = await stripe.prices.list({
    lookup_keys: [req.body.lookup_key],
    expand: ['data.product'],
  });
//   creamos sesion Checkout
  const session = await stripe.checkout.sessions.create({
    billing_address_collection: 'auto',
    line_items: [
      {
        price: prices.data[0].id,
        // For metered billing, do not pass quantity
        quantity: 1,

      },
    ],
    mode: 'subscription',
    // urls de confirmacion y de cancelacion
    success_url: `${YOUR_DOMAIN}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });
// redirecciona al checkout
  res.redirect(303, session.url);
});
// -------------------------------------




module.exports = router;
