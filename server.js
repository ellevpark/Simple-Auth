const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");


require ('dotenv').config();

const userRouter =require ("./routes/api/user")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.get('/', (req, res) => {
  res.send('you have hit the home route ELLEN')
})
app.use(routes);
app.use('/users', userRouter)

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/simple-pass-viral",
  {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
)

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

