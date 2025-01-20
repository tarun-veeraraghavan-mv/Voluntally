import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "An event must have an event"],
  },
  fundsAllocated: {
    type: Number,
    required: [true, "An event must have some funds allocated to it"],
  },
  volunteersParticipating: {
    type: Number,
    required: [true, "An event must have some volunteers participating in it"],
  },
  eventGoal: {
    type: String,
    required: [true, "An event must have a goal"],
  },
  location: {
    type: String,
    required: [true, "An event must have a location"],
  },
  campaignId: {
    type: mongoose.Schema.ObjectId,
    ref: "Campaign",
  },
  imageUrl: {
    type: String,
  },
  eventManagerId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
