const { Router } = require('express');

const stripe = require('stripe')('sk_test_51LkCysDY7badEkJlamkZPnFP3RBDv8JiK3uH9Ppv0BKxIinBUfz1I7wopdGtVUZcRXCUv8amtBvF2NxDYZNEhMRJ00mPeWn11N');

const YOUR_DOMAIN = 'http://localhost:3001';
const router = Router();

// crear sesion en el portal
router.post('/create-portal-session', async (req, res) => {
    // For demonstration purposes, we're using the Checkout session to retrieve the customer ID.
    // Typically this is stored alongside the authenticated user in your database.
    const { session_id } = req.body;
    const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);
  
    // This is the url to which the customer will be redirected when they are done
    // managing their billing with the portal.
    const returnUrl = YOUR_DOMAIN;
  
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: checkoutSession.customer,
      return_url: returnUrl,
    });
  // redirige al portal
    res.redirect(303, portalSession.url);
  });
  module.exports = router;