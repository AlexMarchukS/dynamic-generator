import Vue from 'vue';

class Order {
  constructor(initialState) {
    Object.assign(this, { ...initialState })
  }
}

const state = Vue.observable({
  order: new Order(),
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

  methods: {
    updateModel(payload) {
      state.order = new Order({ ...this.order, ...payload })
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
      state.order = new Order({ ...this.order, ...order })
    }
  }
}

export { v }