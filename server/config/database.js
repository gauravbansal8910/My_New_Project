const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,      // Jab tum MongoDB server se connect karte ho, tum ek connection string provide karte ho. New URL parser yeh ensure karta hai ki yeh strings sahi tarike se parse (analyze aur samjha) kiye jaa sakein, bina error ke.
        useUnifiedTopology:true,        // Topology engine ka kaam hai servers ko discover karna, unki health monitor karna, aur connection ko manage karna (e.g., agar primary server down ho jaye, toh backup server pe switch karna).
    })
    .then(() => console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )
};