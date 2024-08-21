<template>
  <main class="p-4" v-if="!data.user?.name?.includes?.('Benicio')">
    <div class="py-4">
      <span class="w-full flex items-center justify-center">
        <img
          src="/images/logo_croissant_largo.png"
          alt="Croissant"
          class="w-3/4 -mt-6"
        />
      </span>

      <span class="flex items-end justify-between">
        <Header> Hola {{ data.user.name }} </Header>
        <span class="font-bold text-lg text-gray-500">
          {{ usePoints().value.points }} Puntos
        </span>
      </span>
      <div class="w-full mt-4">
        <NuxtLink to="/escanear-qr">
          <PrimaryButton class="min-w-full">
            Sumá Puntos
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.5 4.5C3.5 4.23478 3.60536 3.98043 3.79289 3.79289C3.98043 3.60536 4.23478 3.5 4.5 3.5H7.5C7.76522 3.5 8.01957 3.60536 8.20711 3.79289C8.39464 3.98043 8.5 4.23478 8.5 4.5V7.5C8.5 7.76522 8.39464 8.01957 8.20711 8.20711C8.01957 8.39464 7.76522 8.5 7.5 8.5H4.5C4.23478 8.5 3.98043 8.39464 3.79289 8.20711C3.60536 8.01957 3.5 7.76522 3.5 7.5V4.5ZM5.5 6.5V5.5H6.5V6.5H5.5ZM3.5 13.5C3.5 13.2348 3.60536 12.9804 3.79289 12.7929C3.98043 12.6054 4.23478 12.5 4.5 12.5H7.5C7.76522 12.5 8.01957 12.6054 8.20711 12.7929C8.39464 12.9804 8.5 13.2348 8.5 13.5V16.5C8.5 16.7652 8.39464 17.0196 8.20711 17.2071C8.01957 17.3946 7.76522 17.5 7.5 17.5H4.5C4.23478 17.5 3.98043 17.3946 3.79289 17.2071C3.60536 17.0196 3.5 16.7652 3.5 16.5V13.5ZM5.5 15.5V14.5H6.5V15.5H5.5ZM13.5 3.5C13.2348 3.5 12.9804 3.60536 12.7929 3.79289C12.6054 3.98043 12.5 4.23478 12.5 4.5V7.5C12.5 7.76522 12.6054 8.01957 12.7929 8.20711C12.9804 8.39464 13.2348 8.5 13.5 8.5H16.5C16.7652 8.5 17.0196 8.39464 17.2071 8.20711C17.3946 8.01957 17.5 7.76522 17.5 7.5V4.5C17.5 4.23478 17.3946 3.98043 17.2071 3.79289C17.0196 3.60536 16.7652 3.5 16.5 3.5H13.5ZM14.5 5.5V6.5H15.5V5.5H14.5Z"
                fill="white"
              />
              <path
                d="M11.5 4.5C11.5 4.23478 11.3946 3.98043 11.2071 3.79289C11.0196 3.60536 10.7652 3.5 10.5 3.5C10.2348 3.5 9.98043 3.60536 9.79289 3.79289C9.60536 3.98043 9.5 4.23478 9.5 4.5V5.5C9.5 5.76522 9.60536 6.01957 9.79289 6.20711C9.98043 6.39464 10.2348 6.5 10.5 6.5C10.7652 6.5 11.0196 6.39464 11.2071 6.20711C11.3946 6.01957 11.5 5.76522 11.5 5.5V4.5ZM10.5 7.5C10.7652 7.5 11.0196 7.60536 11.2071 7.79289C11.3946 7.98043 11.5 8.23478 11.5 8.5V9.5H13.5C13.7652 9.5 14.0196 9.60536 14.2071 9.79289C14.3946 9.98043 14.5 10.2348 14.5 10.5C14.5 10.7652 14.3946 11.0196 14.2071 11.2071C14.0196 11.3946 13.7652 11.5 13.5 11.5H10.5C10.2348 11.5 9.98043 11.3946 9.79289 11.2071C9.60536 11.0196 9.5 10.7652 9.5 10.5V8.5C9.5 8.23478 9.60536 7.98043 9.79289 7.79289C9.98043 7.60536 10.2348 7.5 10.5 7.5ZM16.5 9.5C16.2348 9.5 15.9804 9.60536 15.7929 9.79289C15.6054 9.98043 15.5 10.2348 15.5 10.5C15.5 10.7652 15.6054 11.0196 15.7929 11.2071C15.9804 11.3946 16.2348 11.5 16.5 11.5C16.7652 11.5 17.0196 11.3946 17.2071 11.2071C17.3946 11.0196 17.5 10.7652 17.5 10.5C17.5 10.2348 17.3946 9.98043 17.2071 9.79289C17.0196 9.60536 16.7652 9.5 16.5 9.5ZM9.5 13.5C9.5 13.2348 9.60536 12.9804 9.79289 12.7929C9.98043 12.6054 10.2348 12.5 10.5 12.5H11.5C11.7652 12.5 12.0196 12.6054 12.2071 12.7929C12.3946 12.9804 12.5 13.2348 12.5 13.5C12.5 13.7652 12.3946 14.0196 12.2071 14.2071C12.0196 14.3946 11.7652 14.5 11.5 14.5V16.5C11.5 16.7652 11.3946 17.0196 11.2071 17.2071C11.0196 17.3946 10.7652 17.5 10.5 17.5C10.2348 17.5 9.98043 17.3946 9.79289 17.2071C9.60536 17.0196 9.5 16.7652 9.5 16.5V13.5ZM7.5 11.5C7.76522 11.5 8.01957 11.3946 8.20711 11.2071C8.39464 11.0196 8.5 10.7652 8.5 10.5C8.5 10.2348 8.39464 9.98043 8.20711 9.79289C8.01957 9.60536 7.76522 9.5 7.5 9.5H4.5C4.23478 9.5 3.98043 9.60536 3.79289 9.79289C3.60536 9.98043 3.5 10.2348 3.5 10.5C3.5 10.7652 3.60536 11.0196 3.79289 11.2071C3.98043 11.3946 4.23478 11.5 4.5 11.5H7.5ZM17.5 13.5C17.5 13.7652 17.3946 14.0196 17.2071 14.2071C17.0196 14.3946 16.7652 14.5 16.5 14.5H14.5C14.2348 14.5 13.9804 14.3946 13.7929 14.2071C13.6054 14.0196 13.5 13.7652 13.5 13.5C13.5 13.2348 13.6054 12.9804 13.7929 12.7929C13.9804 12.6054 14.2348 12.5 14.5 12.5H16.5C16.7652 12.5 17.0196 12.6054 17.2071 12.7929C17.3946 12.9804 17.5 13.2348 17.5 13.5ZM16.5 17.5C16.7652 17.5 17.0196 17.3946 17.2071 17.2071C17.3946 17.0196 17.5 16.7652 17.5 16.5C17.5 16.2348 17.3946 15.9804 17.2071 15.7929C17.0196 15.6054 16.7652 15.5 16.5 15.5H13.5C13.2348 15.5 12.9804 15.6054 12.7929 15.7929C12.6054 15.9804 12.5 16.2348 12.5 16.5C12.5 16.7652 12.6054 17.0196 12.7929 17.2071C12.9804 17.3946 13.2348 17.5 13.5 17.5H16.5Z"
                fill="white"
              />
            </svg> </PrimaryButton
        ></NuxtLink>
        <Transition>
          <div
            v-if="
              showBadge &&
              useRoute().query.points !== 0 &&
              useRoute().query.points
            "
            class="w-full flex items-center justify-center"
          >
            <span
              class="bg-green-100 text-green-800 text-md font-bold px-4 py-2 mt-4 mx-auto rounded-full"
              >Se agregaron {{ useRoute().query.points }} puntos a tu
              cuenta</span
            >
          </div>
        </Transition>
      </div>
    </div>
    <div class="py-4">
      <Subheader class="mb-1"> Canjeá tus puntos </Subheader>
      <span class="items-center flex justify-center min-w-full pb-2 pl-2">
        <PillButton
          @click="changeSelectedCategory(category)"
          v-for="category in categories"
          :key="category"
          class="capitalize mr-2 transition"
          :class="{
            '!bg-primary-brown-standard': selectedCategory === category,
          }"
          >{{ category }}
        </PillButton>
      </span>
      <TransitionGroup name="list" class="grid grid-cols-1 gap-4 mt-4">
        <RewardCard
          v-for="product in products_that_could_be_rewarded"
          :product_name="product.name"
          :points_required="product.points_required"
          :image_url="product.image"
          :key="product.name"
          @redeem="redeem"
        />
      </TransitionGroup>
      <TransitionGroup name="list">
        <UnavailableRewardCard
          v-for="product in products_not_yet_available"
          :product_name="product.name"
          :points_required="product.points_required"
          :image_url="product.image"
          :key="product.name"
        />
      </TransitionGroup>
    </div>
  </main>
  <main v-else class="p-4">
    <div class="py-4">
      <span class="flex items-end justify-between">
        <Header>¡Hola!</Header>
      </span>
      <div class="w-full mt-4">
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-800"
            >Código</label
          >
          <input
            type="text"
            id="first_name"
            v-model="codeToVerify"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <PrimaryButton
          class="mt-8 w-full"
          :disabled="!codeToVerify"
          @click="verifyCode"
        >
          Verificar
        </PrimaryButton>
        <Transition>
          <div
            v-if="redeemedReward"
            class="w-full flex items-center justify-center"
          >
            <span
              class="bg-green-100 text-green-800 text-md font-bold px-4 py-2 mt-4 mx-auto rounded-full"
              >1 {{ redeemedReward }}
            </span>
          </div>
          <div
            class="w-full flex items-center justify-center"
            v-else-if="redeemedReward === 0"
          >
            <span
              class="bg-red-100 text-red-800 text-md font-bold px-4 py-2 mt-4 mx-auto rounded-full"
              >Código inválido</span
            >
          </div>
        </Transition>
      </div>
    </div>
  </main>
  <div
    class="min-w-full min-h-body pt-48 top-0 absolute bg-[#00000033]"
    style="box-shadow: 0 0 0 1000000px rgba(0, 0, 0, 0.2)"
    v-if="showModal"
  >
    <div class="bg-white rounded-lg mx-8 p-8">
      <PrimaryButton @click="closeModal" class="mt-2 ml-auto">X</PrimaryButton>

      <p class="text-xl text-gray-600 -mt-8">
        El código es
        <span class="font-bold text-yellow-500"> {{ code }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data } = useAuth();
const showModal = ref(false);
const closeModal = () => {
  showModal.value = false;
};
const codeToVerify = ref("");
const redeemedReward = ref(false);
const verifyCode = async () => {
  redeemedReward.value = "Descuento Aplicado";
  const savedCodes = JSON.parse(localStorage.getItem("codes") || "[]");
  if (!savedCodes.includes(codeToVerify.value))
    return (redeemedReward.value = 0);
  const config = useRuntimeConfig();
  await $fetch(config.public.baseURL + "/api/apply-reward", {
    method: "POST",
    body: {
      code: codeToVerify.value,
    },
  });
  const codes = savedCodes.filter((c) => c !== codeToVerify.value);
  // remove codeToVerify.value
  localStorage.setItem("codes", JSON.stringify(codes));
  codeToVerify.value = "";

  setTimeout(() => {
    redeemedReward.value = false;
  }, 8000);
};
const showBadge = ref(false);
const code = ref("");

const redeem = (product_name) => {
  let code_value =
    product_name.substring(0, 3).toUpperCase() +
    "-" +
    Math.floor(100 + Math.random() * 900);
  const codes = JSON.parse(localStorage.getItem("codes") || "[]");
  code.value = code_value;
  // Add the new code to the array
  codes.push(code_value);

  // Store the updated array back in localStorage
  localStorage.setItem("codes", JSON.stringify(codes));
};
watch(
  () => usePoints().value.points,
  (points, oldPoints) => {
    if (points <= oldPoints) {
      showModal.value = true;
    }
  }
);
if (useRoute().query.show_badge == "true") {
  setTimeout(() => {
    showBadge.value = true;
  }, 500);
  setTimeout(() => {
    showBadge.value = false;
  }, 3000);
}
const first_part_of_url =
  "https://coffee-time-pied.vercel.app/images/" ||
  window?.location?.origin ||
  "http://localhost:3000" + "/images/";
const products = [
  {
    category: "bebidas",
    points_required: 3500,
    image: "cafe_xl.jpg",
  },
  {
    category: "pastelería",
    points_required: 5800,
    image: "muffin.jpg",
  },
  {
    category: "salado",
    points_required: 1900,
    image: "medialuna_de_jyq.jpeg",
  },
  {
    category: "pastelería",
    points_required: 900,
    image: "medialuna_dulce.jpeg",
  },
  {
    category: "pastelería",
    points_required: 5700,
    image: "porcion_bruce.jpg",
  },
  {
    category: "pastelería",
    points_required: 3300,
    image: "porcion_budin_limon_y_amapolas.jpg",
  },
  {
    category: "pastelería",
    points_required: 5600,
    image: "porcion_de_chesscake_frutos_rojos.jpeg",
  },
  {
    category: "pastelería",
    points_required: 5700,
    image: "porcion_red_velvet.jpg",
  },
  {
    category: "salado",
    points_required: 3000,
    image: "scon_de_queso.jpg",
  },
  {
    category: "salado",
    points_required: 3600,
    image: "scon_relleno.jpg",
  },
  {
    category: "salado",
    points_required: 6300,
    image: "tostado.jpg",
  },
].map((p) => ({
  ...p,
  image: first_part_of_url + p.image,
  name: p.image
    .split(".")[0] // Elimina la extensión del archivo
    .replace(/_/g, " ") // Reemplaza guiones bajos por espacios
    .replace(/\b\w/g, (c) => c.toUpperCase()), // Capitaliza la primera letra de cada palabra
}));
let selectedCategory = ref("todos");
const changeSelectedCategory = (e) => {
  selectedCategory.value = e;
};
const categories = ["todos", ...new Set(products.map((e) => e.category))];
const filteredProducts = computed(() => {
  return products.filter(
    (e) =>
      selectedCategory.value === "todos" ||
      e.category === selectedCategory.value
  );
});
const products_that_could_be_rewarded = computed(() => {
  return filteredProducts.value.filter(
    (product) => product.points_required <= usePoints().value.points
  );
});
const products_not_yet_available = computed(() => {
  return filteredProducts.value.filter(
    (product) => product.points_required > usePoints().value.points
  );
});
console.log(data.value);
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
