import mongoose from "mongoose";
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
  avatar: {
    type: String,
  },
  properties: [
    {
      type: Schema.Types.ObjectId,
      ref: "Property",
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
