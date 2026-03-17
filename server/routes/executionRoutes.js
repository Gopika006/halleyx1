const router = require("express").Router();
const controller = require("../controllers/executionController");

router.post("/:workflow_id/execute", controller.executeWorkflow);

module.exports = router;