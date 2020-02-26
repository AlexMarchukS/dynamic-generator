<script>
import { v } from "../v";

const components = {
  generalDetails: {
    fields: {
      orderDate: {
        componentName: 'x-input',
        value: "",
        label: "Order date",
        validations: {
          required: { msg: "This field is requied" },
          maxLength: { msg: "MAX...", params: 5 },
          minLength: { msg: "MIN...", params: 3 }
        }
      },
      purchaseNumber: {
        componentName: 'x-input',
        value: "",
        label: "Purchase Number",
        validations: {
          required: { msg: "This field is requied" }
        }
      }
    }
  },
  products: {
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
  }
};

export default {
  mixins: [v],
  name: "context",

  data: () => ({
    schema: {
      components
    }
  }),

  render(h) {
    return h(
      "div",
      this.$scopedSlots.default({
        order: this.order,
        v: this.$v,
        schema: this.schema
      })
    );
  }
};
</script>
