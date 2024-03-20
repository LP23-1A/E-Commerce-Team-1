import express from "express";
import { dashboard } from "../controller/dashboard";

const DashboardSum = express.Router();

DashboardSum.get("/sum", dashboard);

export { DashboardSum };