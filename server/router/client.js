const express = require("express");
const clientController = require("../controllers/client");
const router = express.Router();

// get the clients or use the name parameter to filter
router.get("/clients", clientController.getClients);

router.get("/client/:id", clientController.getById);

router.post("/client", clientController.createClient);

router.put("/client/:id", clientController.updateClient);

router.delete("/client/:id", clientController.deleteClient);

module.exports = router;
