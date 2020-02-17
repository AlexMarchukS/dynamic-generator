function getFirstError(order, field, rules) {
  for (const rule in rules) {
    const _field = order[field];
    if (!_field[rule]) {
      return rules[rule].msg;
    }
  }
}

function getErrorsStack(order, field, rules) {
  const errors = [];

  for (const rule in rules) {
    const _field = order[field];
    if (!_field[rule]) {
      errors.push(rules[rule].msg)
    }
  }
  return errors;
}

export {
  getFirstError,
  getErrorsStack
}