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
    minLength: 50,
  },
  category: {
    type: String,
    enum: ["Maison", "Appartement", "Bureaux", "Villa"],
    required: true,
  },
  propertySize: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  availableAt: {
    type: String,
    required: true,
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
  propertyStuff: {
    totalRooms: {
      type: Number,
      required: true,
    },
    totalBathrooms: {
      type: Number,
      required: true,
    },
    totalBedrooms: {
      type: Number,
      required: true,
    },
    isGarage: {
      type: Boolean,
      default: false,
    },
    isKitchen: {
      type: Boolean,
      default: false,
    },
    isToilet: {
      type: Boolean,
      default: false,
    },
  },

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
