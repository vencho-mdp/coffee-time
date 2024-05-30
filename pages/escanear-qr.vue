<template>
  <main class="p-4">
    <Header class="text-center mb-4">Escaneá el código</Header>
    <qrcode-stream class="rounded-xl" @detect="onDetect"></qrcode-stream>
  </main>
</template>

<script lang="ts" setup>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";
const onDetect = async (data) => {
  const endpoint = data[0].rawValue;
  // fetch the endpoint and save it to the state
  // const response = await $fetch(endpoint, {
  //   method: "POST",
  // });
  let points = usePoints().value;
  points.points += 800;
  // redirect to the next page
  navigateTo({ path: "/", query: { show_badge: true } });
};
</script>

<style></style>
