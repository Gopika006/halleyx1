const router = require("express").Router();
const controller = require("../controllers/ruleController");

router.post("/", controller.createRule);
router.get("/:step_id", controller.getRules);
router.put("/:id", controller.updateRule);
router.delete("/:id", controller.deleteRule);

module.exports = router;