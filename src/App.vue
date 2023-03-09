<script setup lang="ts">
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      |
      <RouterLink to="/todo">Todo</RouterLink>
      |
      <RouterLink to="/products">Products</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>