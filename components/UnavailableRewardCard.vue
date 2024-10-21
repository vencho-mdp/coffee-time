<template>
  <div
    class="p-4 border-gray-200 bg-white border flex flex-col items-center rounded-lg my-2 justify-between"
  >
    <div class="flex items-center justify-between min-w-full">
      <img
        :src="props.image_url"
        alt="product"
        loading="lazy"
        class="rounded-full h-36 w-36 object-cover"
      />
      <span>
        <div class="pr-12">
          <h4 class="text-xl text-center font-bold text-gray-800">
            {{ props.product_name }}
          </h4>
          <h5 class="text-md text-center font-bold text-gray-500">
            {{ props.points_required }} puntos
          </h5>
        </div>
      </span>
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
const props = defineProps(["product_name", "points_required", "image_url"]);
</script>

<style></style>
