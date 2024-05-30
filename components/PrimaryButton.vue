<template>
  <button
    :class="[
      $attrs.disabled
        ? '!bg-gray-300 text-gray-500'
        : 'bg-yellow-500 text-gray-50',
    ]"
    class="bg-yellow-500 text-sm font-medium rounded-md text-gray-50 flex items-center justify-center py-2 px-4"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup></script>

<style></style>
