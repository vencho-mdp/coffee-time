<template>
  <main class="p-4">
    <Header class="text-center mb-4">Escaneá el código</Header>
    <qrcode-stream class="rounded-xl" @detect="onDetect"></qrcode-stream>
  </main>
</template>

<script lang="ts" setup>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";

const onDetect = async (data = [{ rawValue: "/api/add-points" }]) => {
  let points = usePoints().value;
  const config = useRuntimeConfig();

  const res = await $fetch(config.public.baseURL + "/api/add-points", {
    method: "POST",
  });
  points.points += res.added_points || 0;
  console.log(usePoints().value);
  // redirect to the next page
  navigateTo({
    path: "/",
    query: { show_badge: true, points: res.added_points },
  });
};
</script>

<style></style>
