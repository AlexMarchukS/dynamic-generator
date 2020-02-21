function getFirstError(order, field, rules) {
  if (!rules || !(order[field].$invalid && order[field].$dirty)) {
    return null;
  }

  for (const rule in rules) {
    const _field = order[field];
    if (!_field[rule]) {
      return rules[rule].msg;
    }
  }
}

function getErrorsStack(order, field, rules) {
  if (!rules || !(order[field].$invalid && order[field].$dirty)) {
    return null;
  }

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