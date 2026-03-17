const Workflow = require("../models/Workflow");

exports.createWorkflow = async (req, res) => {
  try {
    const workflow = await Workflow.create(req.body);
    res.json(workflow);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getWorkflows = async (req, res) => {
  const workflows = await Workflow.find();
  res.json(workflows);
};

exports.getWorkflow = async (req, res) => {
  const workflow = await Workflow.findById(req.params.id);
  res.json(workflow);
};

exports.updateWorkflow = async (req, res) => {
  const workflow = await Workflow.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(workflow);
};

exports.deleteWorkflow = async (req, res) => {
  await Workflow.findByIdAndDelete(req.params.id);
  res.json({ message: "Workflow deleted" });
};