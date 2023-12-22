import express from "express";
export const router = express.Router();

import { getAllProducts, getTransactions } from "../controllers/products.js";

router.route("/").get(getAllProducts);
