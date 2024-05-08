import { Router } from "express";
import {
  homePage,
  addData,
  getData,
  updateData,
} from "../controllers/dataController";

const dataRoutes = (router: Router) => {
  router.get("/", homePage);

  router.get("/data/:contentType", getData);
  
  router.post("/add-data/:contentType", addData);

  router.post("/update-data/:contentType", updateData);
};

export default dataRoutes;
