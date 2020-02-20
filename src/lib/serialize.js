/* eslint-disable */
import * as vv from 'vuelidate/lib/validators';

const excludeMeta = (payload) => {
  const { value, type, label, ...rest } = payload;
  return rest;
}

function serialize(payload) {
  const schema = { ...payload };
  const searchableField = 'validations';

  function validationSchema(schema) {
    for (const key in schema) {
      const prop = schema[key];

      if (prop) {
        const isSpecified = prop.hasOwnProperty(searchableField);
        if (typeof prop === 'object') {
          validationSchema(prop)
        }

        if (isSpecified) {
          let body = {};
          const field = prop[searchableField];

          for (const rule in field) {
            body = {
              ...body,
              [rule]: field[rule].params
                ? vv[rule].call(null, field[rule].params)
                : vv[rule].bind(null)
            }
          }
          schema[key] = { ...excludeMeta(prop), ...body }
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