<template>
  <div
    class="p-4 border-gray-200 bg-white border flex flex-col items-center rounded-lg my-2 justify-between max-w-md"
  >
    <div class="flex items-center justify-between min-w-full">
      <NuxtImg
        :src="'/images/' + props.image_url"
        alt="product"
        width="144"
        height="144"
        placeholder
        class="rounded-full object-cover h-36 w-36"
      />
      <div class="w-44 px-2">
        <h4 class="text-xl text-center font-bold text-gray-800">
          {{ props.product_name }}
        </h4>
        <h5 class="text-md text-center font-bold text-gray-500">
          {{
            !props.options
              ? props.points_required
              : props.options[0].points_required
          }}
          puntos
        </h5>
      </div>
    </div>
    <ProgressBar
      :width="(usePoints().value.points / props.points_required) * 100"
    >
      Faltan {{ props.points_required - usePoints().value.points }} puntos
    </ProgressBar>
    <SecondaryButton class="w-full" :disabled="true"> Canjear </SecondaryButton>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps([
  "product_name",
  "points_required",
  "image_url",
  "options",
]);
</script>

<style></style>
