const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors")
const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(cors())


// Route Imports
const user = require("./routes/userRoute");
const category = require("./routes/categroyRoutes");
app.use("/api/v1", user);
app.use("/api/v1", category);


// app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  res.status(200).json({
    success: true,
    message: "invalid route add, api is working fine"
  });
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
