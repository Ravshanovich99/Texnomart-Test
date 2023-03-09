import { defineStore } from 'pinia'
import axios from 'axios'
import type { Product, ProductsResponse } from '@/models/interfaces'

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products: [] as Product[],
    total: 0,
    skip: 0,
    limit: 12,
    filterBrand: null as string | null,
  }),

  getters: {
    brands: (state) =>
      Array.from(new Set(state.products.map((product) => product.brand))),
    filteredProducts: (state) => {
      if (state.filterBrand !== null) {
        return state.products.filter(
          (product) => product.brand === state.filterBrand
        );
      }
      return state.products;
    },
    currentPage: (state) => Math.floor(state.skip / state.limit) + 1,
    totalPages: (state) => Math.ceil(state.total / state.limit),
  },
  actions: {
    recalculateTotalPages() {
      this.$state.products = this.$state.products.filter(product => product.brand === this.$state.filterBrand)
      this.$state.total = Math.ceil(this.$state.products.length / this.$state.limit)
    },
    async fetchProducts() {
      try {
        const response = await axios.get<ProductsResponse>(
          "https://dummyjson.com/products",
          {
            params: {
              skip: this.$state.skip,
              limit: this.$state.limit,
              brand: this.$state.filterBrand,
            },
          }
        );
        if (this.$state.filterBrand) {
          this.recalculateTotalPages()
        } else {
          this.$state.products = response.data.products;
          this.$state.total = response.data.total;
        }
      } catch (error) {
        console.error(error);
      }
    },
    resetFilters() {
      this.$state.filterBrand = null;
      this.$state.skip = 0;
      this.fetchProducts();
    },
    changePage(page: number) {
      this.$state.skip = (page - 1) * this.$state.limit;
      this.fetchProducts();
    },
  }
})
