<template>
  <button
    :class="[
      $attrs.disabled
        ? '!bg-gray-300 text-gray-500'
        : 'bg-primary-brown-dark text-gray-50',
    ]"
    class="bg-primary-brown-dark text-gray-50 rounded-xl text-sm font-medium flex items-center justify-center py-2.5 px-4"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup></script>

<style></style>
