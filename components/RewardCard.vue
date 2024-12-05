<template>
  <div
    class="p-4 bg-white border-gray-200 border flex flex-col items-center rounded-lg my-2 justify-between max-w-md"
  >
    <div class="flex items-center justify-between min-w-full">
      <NuxtImg
        :src="'/images/' + props.image_url"
        width="144"
        height="144"
        alt="product"
        class="rounded-full object-cover h-36 w-36"
      />
      <span class="pl-4">
        <div class="pr-12">
          <h4 class="text-xl text-center font-bold text-gray-800">
            {{ props.product_name }}
          </h4>
          <h5 class="text-md text-center font-bold text-gray-500">
            {{
              props.points_required ||
              options.find(
                (e) =>
                  e.code === selectedOption ||
                  e.product_name_in_dashboard === selectedOption
              ).points_required ||
              options[0].points_required
            }}
            puntos
          </h5>
        </div>
      </span>
    </div>
    <span class="flex min-w-full flex-col items-center mt-1 justify-center">
      <Dropdown
        v-if="options"
        v-model="selectedOption"
        :options="
          props.options.map((el) => ({
            label: el.option,
            value: el.code || el.product_name_in_dashboard,
          }))
        "
        label="Sabor"
        class="w-full mb-2"
      />
      <SecondaryButton @click="redeem" class="w-full mt-1">
        Canjear
      </SecondaryButton>
    </span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps([
  "product_name",
  "points_required",
  "image_url",
  "options",
  "category",
]);
const selectedOption = ref(
  props.options?.[0]?.code ||
    props.options?.[0]?.product_name_in_dashboard ||
    null
);
watch(
  () => props.category,
  () => {
    if (!props.options) return;
    selectedOption.value =
      props.options.find((e) => e.category === props.category)?.code ||
      props.options.find((e) => e.category === props.category)
        ?.product_name_in_dashboard ||
      props.options[0].code ||
      props.options[0].product_name_in_dashboard;
  }
);
const emit = defineEmits(["redeem"]);
const redeem = () => {
  console.log(
    selectedOption.value
      ? selectedOption.value.points_required
      : props.points_required
  );
  usePoints().value.points =
    usePoints().value.points -
    (selectedOption.value
      ? props.options.find(
          (e) =>
            e.code === selectedOption.value ||
            e.product_name_in_dashboard === selectedOption.value
        ).points_required
      : props.points_required);
  emit("redeem", props.product_name, selectedOption.value);
};
</script>

<style></style>
