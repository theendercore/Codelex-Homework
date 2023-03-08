<template>
  <div>
    <button @click="count++">Count is: {{ count }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      count: 0,
    };
  },
});
</script>
