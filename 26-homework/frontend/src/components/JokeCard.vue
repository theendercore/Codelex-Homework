<script lang="ts">
import { defineComponent } from "vue"
import type { PostResponse } from "@/types"
export default defineComponent({
  name: "JokeCard",
  components: {},
  props: {
    id: Number,
    likeIn: Boolean
  },
  created() {
    if (this.likeIn !== undefined) this.liked = this.likeIn
  },
  data() {
    return {
      liked: false
    }
  },
  methods: {
    toggleLiked(id: Number | undefined) {
      if (id === undefined) return

      this.liked = !this.liked

      console.log(this.liked ? "liked" : "unliked")
      console.log(this.liked ? "post" : "del", id)

      fetch("real-server", {
        method: this.liked ? "POST" : "DELETE",
        body: JSON.stringify({ jokeId: id }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
        .then(({ response }: PostResponse) => {
          if (response === "Failure") {
            this.liked = !this.liked
            console.warn("This is a failure")
          }
        })
    }
  }
})
</script>

<template>
  <div
    class="joke relative flex w-[400px] flex-col items-center rounded bg-slate-300 p-4 shadow-inner"
  >
    <span class="bold self-start pb-2 text-lg text-neutral-800">Joke Nr. {{ id && id + 1 }}</span>
    <div class="text pb-10 text-lg italic text-gray-700">
      <slot name="joke"></slot>
    </div>

    <button
      class="absolute left-2 bottom-2 rounded py-1 px-2"
      :class="{ 'bg-green-200': !liked, 'bg-red-200': liked }"
      @click="toggleLiked(id)"
    >
      {{ liked ? "Remove from" : "Add to" }} Favorite
    </button>
  </div>
</template>
