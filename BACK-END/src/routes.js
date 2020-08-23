const { Router } = require("express");
const DevController = require("./controllers/DevController");

const routes = Router();

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);
// routes.delete("/devs/:name", DevController.delete);

module.exports = routes;
