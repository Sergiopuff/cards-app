const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let CardSchema = new Schema({
  full_name: { type: String, required: true },
  description: { type: String, required: true },
  account: { type: Number, required: true },
  account_name: { type: String, required: true },
  cvv: { type: String, required: true },
  expires: { type: Date, required: true },
  issuer: { type: String, required: true },
  card_number: { type: String, required: true },
  currency: { type: String, required: true },
  amount: { type: String, required: true },
  color: { type: String, required: true },
});

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
