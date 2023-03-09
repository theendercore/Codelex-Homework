<script lang="ts">
import type { Joke } from "@/types"
import { defineComponent } from "vue"
import JokeList from "@/components/JokeList.vue"
import Loading from "@/components/Loading.vue"

export default defineComponent({
  name: "Favorite Jokes",
 
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
      await fetch("from_server")
        .then(async (res: Response) => {
          this.loading = false
          let data = await res.json()
          if (data as Joke[]) {
            let jokeRes = data as Joke[]
            if (jokeRes !== undefined) this.Jokes = jokeRes
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
  <div class="box justify-content flex flex-col items-center">
    <span class="text-6xl font-bold text-slate-600"> Favorite jokes </span>

    <div v-if="loading" class="loading"><Loading /></div>

    <div v-if="error" class="error">{{ error }}</div>
    <JokeList :jokes="Jokes" :setTrue="true" />
  </div>
</template>
