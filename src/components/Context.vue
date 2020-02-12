<script>
import { v } from "../v";

export default {
  mixins: [v],
  name: "context",

  render(h) {
    return h('div', this.$scopedSlots.default({
      order: this.order,
      v: this.$v,
    }))
  }
};
</script>
