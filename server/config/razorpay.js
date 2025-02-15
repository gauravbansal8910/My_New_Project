const Razorpay = require("razorpay");


exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,       // Acts as the public identifier for your Razorpay account.
    key_secret: process.env.RAZORPAY_SECRET,    // Ensures that the request originates from your trusted server and hasn't been tampered with.
});