function prepareModel(ctx, model, { override }) {
  const keys = Object.keys(model);

  return keys.reduce((acc, key) => ({
    ...acc,
    [key]: !override && ctx.order[key] ? this.order[key] : model[key].value
  }), {})
}

export {
  prepareModel
}