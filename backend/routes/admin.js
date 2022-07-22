const express = require("express");

const adControllers = require("../controllers/user");

const router = express.Router();

router.post("/", adControllers.create);
router.get("/", adControllers.getAll);
router.get("/:id", adControllers.findOne);
router.patch("/:id", adControllers.update);
router.delete("/:id", adControllers.delete);

module.exports = router;
