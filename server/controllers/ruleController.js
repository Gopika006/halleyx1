const Rule = require("../models/Rule");

exports.createRule = async (req, res) => {
  try {
    const rule = await Rule.create(req.body);
    res.json(rule);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getRules = async (req, res) => {
  const rules = await Rule.find({ step_id: req.params.step_id });
  res.json(rules);
};

exports.updateRule = async (req, res) => {
  const rule = await Rule.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(rule);
};

exports.deleteRule = async (req, res) => {
  await Rule.findByIdAndDelete(req.params.id);
  res.json({ message: "Rule deleted" });
};