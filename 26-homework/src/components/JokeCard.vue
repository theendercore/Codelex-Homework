<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "JokeCard",
  components: {},
  props: {
    id: Number
  },
  data() {
    return {
      liked: false
    }
  },
  methods: {
    toggleLiked() {
      console.log("e")
      this.liked = !this.liked
      console.log("ran")
    }
  }
})
</script>

<template>
  <div
    class="joke relative flex w-[400px] flex-col items-center rounded bg-slate-300 p-4 shadow-inner"
  >
    <span class="bold self-start pb-2 text-lg text-neutral-800">Joke Nr. {{ id }}</span>
    <div class="text pb-10 text-lg italic text-gray-700">
      <slot name="joke"></slot>
    </div>

    <button
      class="absolute left-2 bottom-2 rounded py-1 px-2"
      :class="{ 'bg-green-200': !liked, 'bg-red-200': liked }"
      @click="toggleLiked"
    >
      {{ liked ? "Remove from" : "Add to" }} Favorite
    </button>
  </div>
</template>
