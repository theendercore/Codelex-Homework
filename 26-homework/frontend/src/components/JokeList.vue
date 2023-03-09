<script lang="ts">
import type { Joke } from "@/types"
import { defineComponent } from "vue"
import JokeCard from "@/components/JokeCard.vue"

export default defineComponent({
  name: "JokeCardList",
  components: { JokeCard },
  props: {
    jokes: Array<Joke>,
    setTrue: Boolean
  }
})
</script>

<template>
  <div v-if="jokes !== undefined" v-for="joke in jokes">
    <JokeCard :id="joke.id" :like-in="setTrue" class="shadow-xl">
      <template #joke> {{ joke.joke }} </template>
    </JokeCard>
  </div>
</template>
