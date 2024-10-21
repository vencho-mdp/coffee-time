<template>
  <main class="p-4">
    <Header class="text-center mb-4">Escaneá el código QR</Header>
    <qrcode-stream class="rounded-lg" @detect="onDetect"></qrcode-stream>
  </main>
</template>

<script lang="ts" setup>
import { QrcodeStream } from "vue-qrcode-reader";
let sales_ids = [];
const onDetect = async (data = [{ rawValue: "/api/add-points" }]) => {
  let points = usePoints().value;
  const config = useRuntimeConfig();

  let res = await $fetch(config.public.baseURL + "/api/add-points", {
    method: "POST",
  });
  if (sales_ids.includes(res.sale_id)) {
    navigateTo({
      path: "/",
      query: { show_badge: true, points: 0 },
    });
    return;
  }
  sales_ids.push(res.sale_id);
  points.points += res.added_points || 0;
  // redirect to the next page
  navigateTo({
    path: "/",
    query: { show_badge: true, points: res.added_points },
  });
};
</script>

<style></style>
