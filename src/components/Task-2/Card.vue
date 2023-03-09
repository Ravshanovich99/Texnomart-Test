<script setup lang="ts">
const props = defineProps({
  thumbnail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  brand: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: "",
  },
  stock: {
    type: Number,
  },
});
</script>


<template>
  <div class="product">
    <img :src="thumbnail" :alt="title" />
    <div class="product-details">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <p>Brand: {{ brand }}</p>
      <p>Price: ${{ price }}</p>
      <p v-if="stock > 0">In stock</p>
      <p v-else>Out of stock</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  object-fit: cover;
  height: 200px;
  width: 100%;
}

.product-details {
  padding: 1rem;

  h3 {
    font-size: 1.5rem;
    margin: 0 0 1rem;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
  }

  p:first-of-type {
    font-weight: bold;
  }

  p:last-of-type {
    font-size: 1.2rem;
    font-weight: bold;
    color: #00a8e8;
  }

  p:only-child {
    font-size: 1.2rem;
    font-weight: bold;
    color: #00a8e8;
  }
}
</style>