const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertyCategory = new Schema({
  category: {
    type: String,
    enum: ["Maison", "Appartement", "Bureaux", "Villa"],
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
