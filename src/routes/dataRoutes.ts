import { Router } from "express";
import {
  addData,
  getAPICount,
  getData,
  updateData,
} from "../controllers/dataController";

const dataRoutes = (router: Router) => {
  router.get("/data/:contentType", getData);
  
  router.post("/add-data/:contentType", addData);

  router.post("/update-data/:contentType", updateData);

  router.get("/count/:contentType", getAPICount);
};

export default dataRoutes;
