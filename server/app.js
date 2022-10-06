// import of modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/user");

// express assigning
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use("/users", router);

// Data Base Connection And Server Connection
mongoose
  .connect(
    "mongodb+srv://nandagopankv:zd6ho7NOWC0aNRLY@cluster0.ki2wrjt.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("DB CONNECTED AND SERVER LISTEN ON PORT 5000");
    });
  })
  .catch((err) => {
    console.log("DB NOT CONNECTED");
    console.log(err);
  })
  .finally(() => {
    console.log("EVERYTHING I DID");
  });

// model : yes
// controlles : yes
// routes : yed
