<script setup lang="ts">
import { RouterView } from "vue-router"
import Navbar from "./components/Navbar.vue"
</script>

<template>
  <Navbar />
  <div class="container m-auto flex flex-col items-center p-10">
    <RouterView />
  </div>
</template>
