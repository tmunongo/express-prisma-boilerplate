import { Router } from "express";
import defaultController from "../controllers/default.controller";

const api = Router().use(defaultController);

export default Router().use("/", api);
