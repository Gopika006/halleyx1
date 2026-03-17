const router = require("express").Router();
const controller = require("../controllers/workflowController");

router.post("/", controller.createWorkflow);
router.get("/", controller.getWorkflows);
router.get("/:id", controller.getWorkflow);
router.put("/:id", controller.updateWorkflow);
router.delete("/:id", controller.deleteWorkflow);

module.exports = router;