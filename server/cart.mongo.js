const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  color: String,
  amt: Number,
  prod: Object,
});

const crt = mongoose.model("cart", cartSchema);
module.exports = {
  crt,
};
