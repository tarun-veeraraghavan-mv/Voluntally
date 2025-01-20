import express from "express";
import {
  createCampaign,
  deleteCampaign,
  getAllCampaigns,
  getCampaign,
  updateCampaign,
} from "../controllers/campaignController";

const router = express.Router();

router.route("/").get(getAllCampaigns).post(createCampaign);

router
  .route("/:id")
  .get(getCampaign)
  .delete(deleteCampaign)
  .patch(updateCampaign);

export default router;
