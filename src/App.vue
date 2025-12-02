<script setup>
import Navbar from "@/components/Navbar/index.vue"

</script>

<template>
  <div class="container mx-auto">
    <Navbar />
    <div class="section-padding">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
