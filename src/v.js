import Vue from 'vue';

const state = Vue.observable({
  order: {},
  validations: {}
})

const v = {
  props: {
    fields: {
      type: Object,
      default: () => null
    }
  },

  computed: {
    order: () => state.order,
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
    updateSchema(
      schema,
      options = { override: false }
    ) {
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
          ...(schema[key].validations && { [key]: schema[key].validations })
        }
      }), initialState)

      state.validations = { ...state.validations, ...validations }
      state.order = { ...this.order, ...order }
    }
  }
}

export { v }