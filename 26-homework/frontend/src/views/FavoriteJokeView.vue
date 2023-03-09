<script lang="ts">
import type { Joke, JokeId } from "@/types"
import { defineComponent } from "vue"
import JokeList from "@/components/JokeList.vue"
import Loading from "@/components/Loading.vue"

export default defineComponent({
  name: "Favorite Jokes",

  data() {
    return {
      Jokes: [] as Joke[],
      jokeIds: [] as JokeId[],
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
      await fetch("http://localhost:3004/jokes/favorite")
        .then(async (res: Response) => {
          let data = await res.json()
          if (data as JokeId[]) {
            let jokeRes = data as JokeId[]
            if (jokeRes !== undefined) this.jokeIds = jokeRes
            else this.error = `Error ${JSON.stringify(jokeRes)}`
          }
        })
        .catch((err: unknown) => {
          this.loading = false
          if (err instanceof Error) this.error = (err as Error).toString()
        })

      this.jokeIds.forEach(async (ele: JokeId) => {
        let x = await fetch(`https://v2.jokeapi.dev/joke/Programming?idRange=${ele.jokeId}`)
        let data = await x.json()
        let jokeRes = data as Joke
        if (jokeRes !== undefined) this.Jokes.push(jokeRes)
        else this.error = `Error ${JSON.stringify(jokeRes)}`
      })
      this.loading = false
    }
  },
  components: { JokeList, Loading }
})
</script>

<template>
  <div class="box justify-content flex flex-col items-center">
    <span class="text-6xl font-bold text-slate-600"> Favorite jokes </span>
    <div class="box flex flex-row flex-wrap justify-center gap-4">
      <div v-if="loading" class="loading"><Loading /></div>
      <div v-if="error" class="error">{{ error }}</div>

      <JokeList :jokes="Jokes" :setTrue="true" />
    </div>
  </div>
</template>
