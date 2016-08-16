Stripe.setPublishableKey('sk_test_b4NnPRLAemqyuxw6LhQS0Zwh');


// function stripeResponseHandler(status, response) {
//   // response contains id and card, which contains additional card details
//   var token = response;
//   // Insert the token into the form so it gets submitted to the server
//   $('.customer-list').append($('<span />').val(token));
//   console.log(response.error);
// }

// stripeResponseHandler();