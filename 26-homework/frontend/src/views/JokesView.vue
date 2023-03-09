<script lang="ts">
import { defineComponent } from "vue"
import Loading from "@/components/Loading.vue"
import JokeList from "@/components/JokeList.vue"
import type { Joke, JokeResponse } from "@/types"

export default defineComponent({
  data() {
    return {
      Jokes: Array<Joke>(),
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
            if (!jokeRes.error && jokeRes !== undefined) this.Jokes = jokeRes.jokes
            else this.error = `Error ${JSON.stringify(jokeRes)}`
          }
        })
        .catch((err: unknown) => {
          this.loading = false
          if (err instanceof Error) this.error = (err as Error).toString()
        })
    }
  },
  components: { JokeList, Loading }
})
</script>

<template>
  <span>Jokes</span>
  <div class="box flex flex-row flex-wrap justify-center gap-4">
    <div v-if="loading" class="loading"><Loading /></div>

    <div v-if="error" class="error">{{ error }}</div>

    <JokeList :jokes="Jokes" />
  </div>
</template>
