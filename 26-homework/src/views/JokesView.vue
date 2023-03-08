<script lang="ts">
import { defineComponent } from "vue"
import JokeCard from "../components/JokeCard.vue"
export default defineComponent({
  data() {
    return {
      Jokes: [
        {
          category: "Programming",
          type: "single",
          joke: "very funny i laugh",
          flags: {},
          id: 43,
          safe: true,
          lang: "en"
        },
        {
          category: "Programming",
          type: "single",
          joke: "Supper hihi",
          flags: {},
          id: 1,
          safe: true,
          lang: "en"
        }
      ] as Joke[]
    }
  },
  components: { JokeCard }
})
</script>

<template>
  <div>fetch all the jokes</div>
  <div class="box flex flex-row flex-wrap gap-4">
    <div v-for="joke in Jokes" class="shadow-xl">
      <JokeCard v-if="joke.type === 'single'" :id="joke.id" class="shadow-inner">
        <template #joke> {{ joke.joke }} </template>
      </JokeCard>
    </div>
  </div>
</template>
