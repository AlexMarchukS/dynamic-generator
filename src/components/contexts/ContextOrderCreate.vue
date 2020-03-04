<script>
import { v } from '@/v';

const components = {
  general_details: {
    sequence: 1,
    fields: {
      orderDate: {
        componentName: 'XInput',
        value: "",
        label: "Order date",
        sequence: 1,
        validations: {
          required: { msg: "This field is required" },
          maxLength: { msg: "MAX...", params: 5 },
          minLength: { msg: "MIN...", params: 3 }
        }
      },
      purchaseNumber: {
        componentName: 'XInput',
        value: "",
        label: "Purchase Number",
        sequence: 2,
        validations: {
          required: { msg: "This field is required" }
        }
      }
    }
  },
  products: {
    sequence: 3,
    fields: {
      entries: {
        value: [],
        validations: {
          required: {}
        },
        $each: {
          productName: {
            value: "",
            validations: {
              minLength: { msg: "MAX...", params: 10 }
            }
          },
          price: {
            value: null,
            validations: {
              minValue: { msg: "MIN...", params: 5 }
            }
          }
        }
      }
    }
  },
  additional_fields: {
    sequence: 2,
    fields: {
      orderDate: {
        componentName: 'XInput',
        value: "",
        label: "Order date",
        sequence: 2,
        validations: {
          required: { msg: "This field is required" },
        }
      },
      purchaseNumber: {
        componentName: 'XInput',
        value: "",
        label: "Purchase Number",
        sequence: 1,
        validations: {
          required: { msg: "This field is required" }
        }
      }
    }
  },
};

export default {
  name: 'context-order-create',

  mixins: [v],

  data: () => ({
    schema: {
      components
    }
  }),

  computed: {
    filteredComponents() {
      return Object.fromEntries(Object.entries(this.schema.components).sort((a, b) => a[1].sequence - b[1].sequence));
    }
  },

  methods: {
    getFilteredFields(fields) {
      return Object.fromEntries(Object.entries(fields).sort((a, b) => a[1].sequence - b[1].sequence));
    },
  },

  render(h) {
    return h(
      "div",
      this.$scopedSlots.default({
        order: this.order,
        v: this.$v,
        schema: this.schema,
        getComponent: this.getComponent,
        filteredComponents: this.filteredComponents,
        getFilteredFields: this.getFilteredFields,
      })
    );
  },
};
</script>
