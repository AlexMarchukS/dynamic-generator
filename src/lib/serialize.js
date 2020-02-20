import * as vv from 'vuelidate/lib/validators';

function excludeMeta(payload) {
  // eslint-disable-next-line
  const { value, type, label, ...rest } = payload;
  return rest;
}

function toVuelidateSchema(field) {
  return Object.keys(field).reduce((acc, rule) => ({
    ...acc,
    [rule]: field[rule].params
      ? vv[rule].call(null, field[rule].params)
      : vv[rule].bind(null)
  }), {})
}

function serialize(payload) {
  const schema = { ...payload };
  const searchableField = 'validations';

  function validationSchema(schema) {
    for (const key in schema) {
      const prop = schema[key];
      if (prop) {
        const isSpecified = Object.prototype.hasOwnProperty.call(prop, searchableField);

        if (typeof prop === 'object') {
          validationSchema(prop)
        }

        if (isSpecified) {
          schema[key] = {
            ...excludeMeta(prop),
            ...toVuelidateSchema(prop[searchableField])
          }
          delete schema[key][searchableField]
        }
      }
    }
  }
  validationSchema(schema);
  return schema;
}

export {
  serialize
}