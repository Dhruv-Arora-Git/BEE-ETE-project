const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  total_amt: Number,
  shippingfee: Number,
  final_amt: Number,
});

const ord = mongoose.model("order", orderSchema);
module.exports = {
  ord,
};
