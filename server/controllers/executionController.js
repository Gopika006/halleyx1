const Workflow = require("../models/Workflow");
const Step = require("../models/Step");
const Rule = require("../models/Rule");
const Execution = require("../models/Execution");

const evaluateRules = require("../services/ruleEngine");

exports.executeWorkflow = async (req, res) => {

  const workflow = await Workflow.findById(req.params.workflow_id);

  let currentStep = workflow.start_step_id;

  let logs = [];

  while (currentStep) {

    const step = await Step.findById(currentStep);

    const rules = await Rule.find({ step_id: currentStep });

    const nextStep = evaluateRules(rules, req.body);

    logs.push({
      step_name: step.name,
      evaluated_rules: rules,
      selected_next_step: nextStep
    });

    currentStep = nextStep;
  }

  const execution = await Execution.create({
    workflow_id: workflow._id,
    status: "completed",
    data: req.body,
    logs
  });

  res.json(execution);
};