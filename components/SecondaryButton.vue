<template>
  <button
    :class="[
      $attrs.disabled
        ? '!bg-gray-300 text-gray-500'
        : 'bg-yellow-700 text-gray-50',
    ]"
    class="bg-yellow-700 text-gray-50 rounded-md text-sm font-medium flex items-center justify-center py-2 px-4"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup></script>

<style></style>
