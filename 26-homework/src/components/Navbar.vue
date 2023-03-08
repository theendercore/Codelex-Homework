<script lang="ts">
import { defineComponent } from "vue"
import { RouterLink } from "vue-router"
export default defineComponent({
  name: "Navbar",
  components: {}
})
</script>

<template>
  <nav
    class="m-auto flex w-max justify-evenly gap-20 rounded-b-xl bg-gray-400 p-5 text-xl text-slate-700"
  >
    <RouterLink class="rounded bg-slate-300 px-4 hover:bg-slate-600 hover:text-gray-300" to="/">
      Home
    </RouterLink>
    <RouterLink
      class="rounded bg-slate-300 px-4 hover:bg-slate-600 hover:text-gray-300"
      to="/jokes"
    >
      Jokes
    </RouterLink>
  </nav>
</template>
