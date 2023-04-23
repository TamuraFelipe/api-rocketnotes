const { Router } = require("express");
const tagsRoutes = Router();
const ensureAuthenticated = require("../Middlewares/ensureAuthenticated");

const TagsController = require("../controllers/TagsController");
const tagsController = new TagsController();

tagsRoutes.get("/", ensureAuthenticated, tagsController.index);

module.exports = tagsRoutes;


