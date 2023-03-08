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
    toggle() {
      this.liked = !this.liked
    }
  }
})
</script>

<template>
  <div class="joke flex w-[400px] flex-col items-center rounded bg-slate-300 p-4">
    <span class="self-start">Joke Nr.{{ id }}</span>
    <div class="text text-lg italic text-gray-700">
      <slot name="joke"></slot>
    </div>

    <div class="buttons flex gap-2">
      <button class="rounded bg-yellow-100 p-1">Like</button>
      <button class="rounded bg-yellow-100 p-1">sub</button>
      <button class="rounded bg-yellow-100 p-1">hate</button>
    </div>
  </div>
</template>
