<template>
  <div class="product-details-cart text-left mt-5">
    <button
      class="btn"
      :class="{disabled:quantity===999}"
      @click="$emit('addCart')"
    >
      加到購物車
    </button>
  </div>
</template>

<script>
export default {
  name: 'AddCart',
  props: {
    quantity: {
      type: Number,
      required: true,
    },
  },
};
</script>
