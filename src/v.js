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
      return field => getFirstError(this.$v.order, field, this.fields[field].validations);
    },
    getErrors() {
      return field => getErrorsStack(this.$v.order, field, this.fields[field].validations);
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

      state.validations = { ...state.validations, ...validations };
      state.order = { ...this.order, ...order };
    },
    getComponent(domainComponent) {
      const components = {
        general_details: 'XOrderCreateGeneralDetails',
        products: 'XOrderCreateProducts'
      };
      return components[domainComponent] ? components[domainComponent] : 'XOrderCreateDefaultSection';
    },
  }
};

export {
  v
}
