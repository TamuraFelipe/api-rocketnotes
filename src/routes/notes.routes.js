const { Router } = require("express");
const notesRoutes = Router();
const ensureAuthenticated = require("../Middlewares/ensureAuthenticated");

const NotesController = require("../controllers/NotesController");
const notesController = new NotesController();

notesRoutes.use(ensureAuthenticated);

notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);
notesRoutes.get("/", notesController.index);

module.exports = notesRoutes;


