const mongoose = require("mongoose");
require('dotenv').config();
const app = require("./app");
const { DB_PASSWORD, DB_USER, DB_HOST, PORT } = process.env;

const port = PORT || 3977;

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}`
  )
  .then(() => {
    app.listen(port, () => {
      console.log("Conectado al puerto", port);
    });
  })
  .catch((err) => {
    console.log("Error connect", err);
  });
