function serialize(schema, key) {
  if (!schema[key].validations) {
    return {};
  }

  return Object.keys(schema[key].validations).reduce((acc, current) => ({
    ...acc,
    [current]: schema[key].validations[current].fn
  }), {});
}

export {
  serialize
}