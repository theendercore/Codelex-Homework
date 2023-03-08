import component from '../../../whipe/vite-env';
<template>
  <div class="Joke w-[200px] flex-col rounded bg-slate-600">
    <div class="text text-lg italic text-gray-700">
      <slot name="joke"></slot>
    </div>

    <div class="buttons"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
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
