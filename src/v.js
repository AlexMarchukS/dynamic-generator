import {
  state,
  serialize,
  getFirstError,
  getErrorsStack
} from './lib';

const v = {
  props: {
    fields: {
      type: Object,
      default: () => null
    }
  },

  computed: {
    order: () => state.order,
    getFirst() {
      return field => {
        const { order } = this.$v;
        const { validations } = this.fields[field];

        if (!validations || !(order[field].$invalid && order[field].$dirty)) {
          return null;
        }

        return getFirstError(order, field, this.fields[field].validations);
      }
    },
    getErrors() {
      return field => {
        const { order } = this.$v;
        const { validations } = this.fields[field];

        if (!validations || !(order[field].$invalid && order[field].$dirty)) {
          return null;
        }

        return getErrorsStack(order, field, this.fields[field].validations)
      }
    }
  },

  validations: () => ({ order: state.validations }),

  created() {
    if (this.fields) {
      this.updateSchema(this.fields);
    }
  },

  methods: {
    updateModel(payload) {
      state.order = { ...this.order, ...payload }
    },
    updateSchema(schema, options = { override: false }) {
      const { override } = options;
      const keys = Object.keys(schema);
      const initialState = { order: {}, validations: {} }

      const { order, validations } = keys.reduce(({ order, validations }, key) => ({
        order: {
          ...order,
          [key]: !override && this.order[key] ? this.order[key] : schema[key].value,
        },
        validations: {
          ...validations,
          [key]: serialize(schema, key),
        }
      }), initialState)

      state.validations = { ...state.validations, ...validations }
      state.order = { ...this.order, ...order }
    }
  }
}

export {
  v
}