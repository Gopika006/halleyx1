function evaluateRules(rules, data) {

  rules.sort((a, b) => a.priority - b.priority);

  for (let rule of rules) {

    if (rule.condition === "DEFAULT") {
      return rule.next_step_id;
    }

    try {
      if (eval(rule.condition)) {
        return rule.next_step_id;
      }
    } catch (err) {
      console.log("Rule error:", err);
    }
  }

  return null;
}

module.exports = evaluateRules;