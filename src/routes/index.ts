import { Router } from "express";

const routes = Router();

routes.use((req, res, next) => {
  return res.status(200).send("Live");
});

export default routes;
