// const { Router } = require('express');
// const stripe = require('stripe')('sk_test_51LkCysDY7badEkJlamkZPnFP3RBDv8JiK3uH9Ppv0BKxIinBUfz1I7wopdGtVUZcRXCUv8amtBvF2NxDYZNEhMRJ00mPeWn11N');

// const YOUR_DOMAIN = 'http://localhost:4242';
// const router = Router();
// // ----------------------------------------

// router.post(
//     '/webhook',
//     express.raw({ type: 'application/json' }),
//     (request, response) => {
//       let event = request.body;
//       // Replace this endpoint secret with your endpoint's unique secret
//       // If you are testing with the CLI, find the secret by running 'stripe listen'
//       // If you are using an endpoint defined with the API or dashboard, look in your webhook settings
//       // at https://dashboard.stripe.com/webhooks
//       const endpointSecret = 'whsec_12345';
//       // Only verify the event if you have an endpoint secret defined.
//       // Otherwise use the basic event deserialized with JSON.parse
//       if (endpointSecret) {
//         // Get the signature sent by Stripe
//         const signature = request.headers['stripe-signature'];
//         try {
//           event = stripe.webhooks.constructEvent(
//             request.body,
//             signature,
//             endpointSecret
//           );
//         } catch (err) {
//           console.log(`⚠️  Webhook signature verification failed.`, err.message);
//           return response.sendStatus(400);
//         }
//       }
//       let subscription;
//       let status;
//       // Handle the event
//       switch (event.type) {
//         case 'customer.subscription.trial_will_end':
//           subscription = event.data.object;
//           status = subscription.status;
//           console.log(`Subscription status is ${status}.`);
//           // Then define and call a method to handle the subscription trial ending.
//           // handleSubscriptionTrialEnding(subscription);
//           break;
//         case 'customer.subscription.deleted':
//           subscription = event.data.object;
//           status = subscription.status;
//           console.log(`Subscription status is ${status}.`);
//           // Then define and call a method to handle the subscription deleted.
//           // handleSubscriptionDeleted(subscriptionDeleted);
//           break;
//         case 'customer.subscription.created':
//           subscription = event.data.object;
//           status = subscription.status;
//           console.log(`Subscription status is ${status}.`);
//           // Then define and call a method to handle the subscription created.
//           // handleSubscriptionCreated(subscription);
//           break;
//         case 'customer.subscription.updated':
//           subscription = event.data.object;
//           status = subscription.status;
//           console.log(`Subscription status is ${status}.`);
//           // Then define and call a method to handle the subscription update.
//           // handleSubscriptionUpdated(subscription);
//           break;
//         default:
//           // Unexpected event type
//           console.log(`Unhandled event type ${event.type}.`);
//       }
//       // Return a 200 response to acknowledge receipt of the event
//       response.send();
//     }
//   );
  
//   // router.listen(3001, () => console.log('Running on port 3001'));

//   module.exports = router;