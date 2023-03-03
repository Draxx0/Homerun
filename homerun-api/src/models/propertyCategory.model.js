const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertyCategory = new Schema({
  category: {
    type: String,
    enum: ["House", "Apartment", "Office", "Modern villa"],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  properties: [
    {
      type: Schema.Types.ObjectId,
      ref: "Property",
    },
  ],
});

module.exports = mongoose.model("PropertyCategory", propertyCategory);
