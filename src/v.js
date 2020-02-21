import {
  state,
  serialize,
  getFirstError,
  getErrorsStack,
  prepareModel
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
      const validations = serialize(schema);
      const order = prepareModel(this, schema, options);

      state.validations = { ...state.validations, ...validations }
      state.order = { ...this.order, ...order }
    }
  }
}

export {
  v
}