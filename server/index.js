const express = require("express");

const app = express();      //creating an express application (instance of express application)

const userRoutes = require("./routes/User");
const paymentRoutes = require("./routes/Payments");
const profileRoutes = require("./routes/Profile");
const CourseRoutes = require("./routes/Course");

const database = require("./config/database");
const cookieParser = require("cookie-parser");       // importing cookie-parser to parse cookies. COOKIES ARE SENT BY WEB SERVER TO CLIENT'S BROWSER AND STORED IN CLIENT'S SIDE WHICHARE USED TO GET INFORMATION ABOUT USER TO MAKE ITS EXPERIENCE BETTER.

const cors = require("cors");   // mein chahta hu backend frontend ki request ko entertain kre isliye cors ki jrurat hoti hai
const fileUpload = require("express-fileupload");
const { cloudnairyconnect } = require("./config/cloudinary");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;
database.connect();

app.use(express.json());    // Parses incoming JSON payloads in requests and makes them accessible via req.body.
app.use(cookieParser());    // Parses cookies from incoming requests and makes them available in req.cookies.

app.use(
  cors({
    origin: JSON.parse(process.env.CORS_ORIGIN),    // yeh frontend ki requests ko entertain krne ke liye hai      // Specifies the origin for CORS, allowing requests from the frontend
    credentials: true,
    maxAge: 14400,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

cloudnairyconnect();

// Mounting these routes organizes the API by functionality. Each route group handles specific features:

// /api/v1/auth → Handles authentication (login, signup, etc.).
// /api/v1/profile → Manages user profiles.
// /api/v1/course → Deals with course-related actions.
// /api/v1/payment → Manages payment processing.

app.use("/api/v1/auth", userRoutes);          //  Mounts user-related routes under /api/v1/auth.

app.use("/api/v1/payment", paymentRoutes);

app.use("/api/v1/profile", profileRoutes);

app.use("/api/v1/course", CourseRoutes);

app.use("/api/v1/contact", require("./routes/ContactUs"));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
