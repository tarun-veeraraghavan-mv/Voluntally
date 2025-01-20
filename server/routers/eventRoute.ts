import express from "express";
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
  updateEvent,
} from "../controllers/eventController";

const router = express.Router();

router.route("/").post(createEvent).get(getAllEvents);

router.route("/:id").get(getEvent).delete(deleteEvent).patch(updateEvent);

export default router;
