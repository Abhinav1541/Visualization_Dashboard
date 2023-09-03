import express from "express";
import { getJsonData, getAllOfFields } from "../controllers/general.js";

const router = express.Router();

// find by id
router.get("/jsonData/:id", getJsonData);

//find all data of fields
router.get("/allOfFields", getAllOfFields);

export default router;
