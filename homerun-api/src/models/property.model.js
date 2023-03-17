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
    type: String,
    enum: ["House", "Apartment", "Office", "Modern villa"],
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
  cover: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    default: 0,
  },
  type: {
    type: String,
    enum: ["rent", "sale"],
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "PropertyComment",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model("Property", propertyModel);
