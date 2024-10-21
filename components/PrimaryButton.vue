<template>
  <button
    :class="[
      $attrs.disabled
        ? '!bg-gray-300 text-gray-500'
        : 'bg-primary-green-dark text-gray-50',
    ]"
    class="text-sm font-medium rounded-xl text-gray-50 flex items-end py-2 px-4 justify-center"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup></script>

<style></style>
