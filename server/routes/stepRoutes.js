const router = require("express").Router();
const controller = require("../controllers/stepController");

router.post("/", controller.createStep);
router.get("/:workflow_id", controller.getSteps);
router.put("/:id", controller.updateStep);
router.delete("/:id", controller.deleteStep);

module.exports = router;