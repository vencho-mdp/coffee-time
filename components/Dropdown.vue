<template>
  <div>
    <label
      for="countries"
      class="block font-bold mb-0.5 text-sm text-gray-900 dark:text-white"
      >{{ props.label }}</label
    >
    <select
      id="countries"
      v-model="model"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    >
      <option
        v-for="option in props.options"
        :key="option.value"
        :selected="option.value === model"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
const model = defineModel();
const props = defineProps(["options", "label"]);
</script>

<style></style>
