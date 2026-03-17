const Step = require("../models/Step");

exports.createStep = async (req, res) => {
  const step = await Step.create(req.body);
  res.json(step);
};

exports.getSteps = async (req, res) => {
  const steps = await Step.find({ workflow_id: req.params.workflow_id });
  res.json(steps);
};

exports.updateStep = async (req, res) => {
  const step = await Step.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(step);
};

exports.deleteStep = async (req, res) => {
  await Step.findByIdAndDelete(req.params.id);
  res.json({ message: "Step deleted" });
};