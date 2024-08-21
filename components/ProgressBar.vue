<template>
  <div
    class="ml-auto mb-1 text-base font-bold text-yellow-900 dark:text-yellow-500"
  >
    <slot />
  </div>
  <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
    <div
      class="bg-primary-brown-light h-2.5 rounded-full"
      :style="{ width: props.width + '%' }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["width"]);
</script>

<style></style>
