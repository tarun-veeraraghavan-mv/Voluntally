import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema({
  campaignId: {
    type: String,
    required: [true, "A campaign must have an ID"],
  },
  name: {
    type: String,
    required: [true, "A campaign must have a name"],
  },
  location: {
    type: String,
    required: [true, "A campaign must have a location"],
  },
  volunteerCount: {
    type: Number,
    required: [true, "A campaign must have a volunteer count"],
  },
  fundsRaised: {
    type: Number,
    required: [true, "A campaign must have some funds raised"],
  },
  eventManagerCount: {
    type: Number,
    required: [true, "A campaign must have a event manager count"],
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

const Campaign = mongoose.model("Campaign", campaignSchema);

export default Campaign;
