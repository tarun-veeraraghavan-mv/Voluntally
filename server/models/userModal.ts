import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "An user must have a name"],
  },
  role: {
    type: String,
    required: [true, "A user must have a role"],
  },
  email: {
    type: String,
    required: [true, "An user must have an email"],
  },
  password: {
    type: String,
    required: [true, "An user must have a password"],
  },
  phoneNumber: {
    type: String,
    required: [true, "An user must have a phone number"],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
