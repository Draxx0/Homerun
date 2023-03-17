const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertyComment = new Schema({
  content: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  property: {
    type: Schema.Types.ObjectId,
    ref: "Property",
  },
});

module.exports = mongoose.model("PropertyComment", propertyComment);
