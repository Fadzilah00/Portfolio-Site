<template>
  <div class="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-300">
    <!-- Header -->
    <Header />
    
    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
// Layout metadata
useHead({
  titleTemplate: '%s | Aina Fadzilah',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>

<style scoped>
/* Additional layout-specific styles if needed */
</style>

