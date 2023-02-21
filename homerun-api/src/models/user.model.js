const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  properties: [
    {
      type: Schema.Types.ObjectId,
      ref: "Property",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
