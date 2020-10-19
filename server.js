const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");const app = express();
const passport = require("passport");

const users = require("./routes/api/users");
const secureRoute = require("./routes/api/data")

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Route login and register
app.use("/api/", users);

// Plug in the JWT strategy as a middleware so only verified users can access this route.
app.use('/user/', passport.authenticate('jwt', { session: false }), secureRoute);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
