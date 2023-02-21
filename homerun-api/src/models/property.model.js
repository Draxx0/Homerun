const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertyModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
    enum: ["house", "apartment", "office", "modern villa"],
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  images: [
    {
      type: String,
    },
  ],
  type: {
    type: String,
    enum: ["rent", "sale"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Customer", propertyModel);
