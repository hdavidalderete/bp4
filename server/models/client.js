const mongoose = require("mongoose");
const ClientSchema = mongoose.Schema({
  name: String,
  lastName: String,
  birthdate: Date,
  email: String,
  cuit: String,
  address: String,
  cellPhone: String,
});

module.exports = mongoose.model("Client", ClientSchema);
