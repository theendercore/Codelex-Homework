<script lang="ts">
import { defineComponent } from "vue"
import JokeCard from "@/components/JokeCard.vue"
import Loading from "@/components/Loading.vue"
import Title from "@/components/Title.vue"

export default defineComponent({
  data() {
    return {
      Jokes: [] as Joke[],
      loading: false,
      error: ""
    }
  },
  async created() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      this.error = ""
      this.loading = true
      await fetch("https://v2.jokeapi.dev/joke/Programming?type=single&amount=10")
        .then(async (res: Response) => {
          this.loading = false
          let data = await res.json()
          if (data as JokeResponse) {
            let jokeRes = data as JokeResponse
            if (!jokeRes.error) this.Jokes = jokeRes.jokes
            else this.error = `Error ${JSON.stringify(jokeRes)}`
          }
        })
        .catch((err: unknown) => {
          this.loading = false
          if (err instanceof Error) this.error = (err as Error).toString()
        })
    }
  },
  components: { JokeCard, Loading, Title }
})
</script>

<template>
  <span>Jokes</span>
  <div class="box flex flex-row flex-wrap justify-center gap-4">
    <!-- <Title> <template #title>Jokes</template></Title> -->
    <div v-if="loading" class="loading"><Loading /></div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="Jokes.length > 0" v-for="joke in Jokes">
      <JokeCard v-if="joke.type === 'single'" :id="joke.id" class="shadow-xl">
        <template #joke> {{ joke.joke }} </template>
      </JokeCard>
    </div>
  </div>
</template>
