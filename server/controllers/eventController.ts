import { Request, Response } from "express";
import Event from "../models/eventModel";

export const createEvent = async (req: Request, res: Response) => {
  try {
    const createdEvent = await Event.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        createdEvent,
      },
    });
  } catch (error: any) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.find()
      .populate("campaignId")
      .populate("eventManagerId");

    res.status(201).json({
      status: "success",
      results: events.length,
      data: {
        events,
      },
    });
  } catch (error: any) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const getEvent = async (req: Request, res: Response) => {
  try {
    const event = await Event.findById(req.params.id)
      .populate("campaignId")
      .populate("eventManagerId");

    res.status(200).json({
      status: "success",
      data: {
        event,
      },
    });
  } catch (error: any) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        updatedEvent,
      },
    });
  } catch (error: any) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    await Event.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
    });
  } catch (error: any) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
