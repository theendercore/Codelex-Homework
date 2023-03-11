<script lang="ts">
import { defineComponent } from "vue"
import type { PostResponse } from "@/types"
export default defineComponent({
  name: "JokeCard",
  components: {},
  props: {
    id: {
      type: Number,
      required: true
    },
    defaultLike: Boolean
  },
  created() {
    if (this.defaultLike !== undefined) this.likeState = this.defaultLike
  },
  data() {
    return {
      likeState: false
    }
  },
  methods: {
    toggleLikeState() {
      this.likeState = !this.likeState
      return this.likeState
    },
    toggleLiked(jokeId: number, likeToggle: () => boolean) {
      let like = likeToggle()
      fetch("http://localhost:3004/jokes/favorite", {
        method: like ? "POST" : "DELETE",
        body: JSON.stringify({ jokeId }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).catch(() => likeToggle())
    }
  }
})
</script>

<template>
  <div
    class="joke relative flex w-[400px] flex-col items-center rounded bg-slate-300 p-4 shadow-xl"
  >
    <span class="bold self-start pb-2 text-lg text-neutral-800">Joke Nr. {{ id + 1 }}</span>
    <div class="text pb-10 text-lg italic text-gray-700">
      <slot name="joke"></slot>
    </div>

    <button
      class="absolute left-2 bottom-2 rounded py-1 px-2"
      :class="{ 'bg-green-200': !likeState, 'bg-red-200': likeState }"
      @click="toggleLiked(id, toggleLikeState)"
    >
      {{ likeState ? "Remove " : "Add " }} Favorite
    </button>
  </div>
</template>
