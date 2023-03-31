import mongoose from "mongoose";

const PropertyStuffSchema = new mongoose.Schema({
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
  totalBalconies: {
    type: Number,
  },
  totalTerraces: {
    type: Number,
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
});

const PropertyStuff = mongoose.model("PropertyStuff", PropertyStuffSchema);

export default PropertyStuff;
