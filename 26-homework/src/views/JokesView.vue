<script lang="ts">
import { defineComponent } from "vue"
import JokeCard from "../components/JokeCard.vue"

export default defineComponent({
  data() {
    return {
      Jokes: [] as Joke[]
    }
  }
})
</script>

<template>
  <div>fetch all the jokes</div>
  <JokeCard>
    <template slot="joke"> hehehe </template>
  </JokeCard>
</template>
