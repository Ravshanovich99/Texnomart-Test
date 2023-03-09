<template>
  <div>
    <div class="filter">
      <label for="filterBrand">Filter by brand:</label>
      <select
        id="filterBrand"
        v-model="selectedBrand"
        @change="filterByBrand(selectedBrand)"
      >
        <option v-for="brand in brands" :value="brand" :key="brand">
          {{ brand }}
        </option>
      </select>
      <button @click="resetFilters">Reset filters</button>
    </div>

    <div class="product-list">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="product"
      >
        <Card
          :thumbnail="product.thumbnail"
          :title="product.title"
          :description="product.description"
          :brand="product.brand"
          :price="product.price"
          :stock="product.stock"
        />
      </div>
    </div>

    <div class="pagination">
      <button :disabled="currentPage <= 1" @click="changePage(currentPage - 1)">
        Prev
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        :disabled="currentPage >= totalPages"
        @click="changePage(currentPage + 1)"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ref } from "vue";
import { useProductsStore } from "@/stores/productsStore";
import Card from "./Card.vue";

export default defineComponent({
  name: "ProductList",
  components: { Card },

  setup() {
    const store = useProductsStore();
    const selectedBrand = ref("");

    const brands = computed(() => store.brands);
    const filteredProducts = computed(() => store.filteredProducts);
    const currentPage = computed(
      () => Math.floor(store.skip / store.limit) + 1
    );
    const totalPages = computed(() => store.totalPages);

    const filterByBrand = (brand: string | null) => {
      store.filterBrand = brand;
      store.fetchProducts();
    };

    const resetFilters = () => {
      selectedBrand.value = "";
      store.filterBrand = "";
      store.resetFilters();
    };

    const changePage = (page: number) => {
      store.changePage(page);
      console.log(selectedBrand.value);
    };

    onMounted(() => {
      store.fetchProducts();
    });

    return {
      brands,
      filteredProducts,
      currentPage,
      totalPages,
      selectedBrand,
      filterByBrand,
      resetFilters,
      changePage,
    };
  },
});
</script>




<style lang="scss">
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  margin: 2rem 0;

  .product {
    display: flex;
    flex-direction: column;
    background-color: #252525;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: box-shadow 0.2s ease-in-out;

    &:hover {
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
    }
  }
}

.filter {
  margin: 2rem 0;

  label {
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 1rem;
  }

  select {
    font-size: 1rem;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    margin-right: 1rem;

    option {
      font-size: 1rem;
    }
  }

  button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #00a8e8;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #0077b6;
    }
  }
}

.pagination {
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #00a8e8;
    color: white;
    cursor: pointer;
    margin-right: 1rem;

    &[disabled] {
      background-color: #ccc;
      color: #666;
      cursor: not-allowed;
    }

    &:hover:not([disabled]) {
      background-color: #0077b6;
    }
  }

  span {
    font-size: 1rem;
    font-weight: bold;
    margin: 0 1rem;
  }
}
</style>