import { Request, Response } from "express";
import mongoose from "mongoose";
import Campaign from "../models/campaignModel";

export const createCampaign = async (req: Request, res: Response) => {
  try {
    const newCampaign = await Campaign.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        newCampaign,
      },
    });
  } catch (error: any) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const getAllCampaigns = async (req: Request, res: Response) => {
  const campaigns = await Campaign.find();

  res.status(200).json({
    status: "success",
    results: campaigns.length,
    data: {
      campaigns,
    },
  });
};

export const getCampaign = async (req: Request, res: Response) => {
  try {
    const campaign = await Campaign.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        campaign,
      },
    });
  } catch (error: any) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const updateCampaign = async (req: Request, res: Response) => {
  try {
    const updatedCampaign = await Campaign.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      status: "success",
      data: {
        updatedCampaign,
      },
    });
  } catch (error: any) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const deleteCampaign = async (req: Request, res: Response) => {
  try {
    await Campaign.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      message: "Successfully deleted",
    });
  } catch (error: any) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
