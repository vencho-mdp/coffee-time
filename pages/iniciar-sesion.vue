<template>
  <main
    class="flex items-center flex-col justify-center min-w-full min-h-[70vh]"
  >
    <span class="w-full flex items-center justify-center">
      <img
        src="/images/logo_croissant.png"
        alt="Croissant"
        class="w-40 -mt-6"
      />
    </span>
    <Header class="mt-8 text-center">¡Hola Crossi Fan!</Header>
    <span class="text-lg mb-8 text-center">
      {{
        // if user already has account will be redirected
        "¡Te invitamos dos medialunas en tu visita!"
      }}</span
    >
    <!-- <div class="mb-4">
      <label
        for="email"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Email</label
      >
      <input
        type="email"
        id="email"
        v-model="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5"
        required
      />
    </div>
    <div class="mb-6">
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Contraseña</label
      >
      <input
        type="password"
        id="password"
        v-model="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5"
        required
      />
    </div>
    <PrimaryButton
      :disabled="!email || !password"
      class="!w-80"
      @click="signIn('credentials')"
    >
      Entrar
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.16667 13.833L5.83333 10.4997M5.83333 10.4997L9.16667 7.16634M5.83333 10.4997H17.5M13.3333 13.833V14.6663C13.3333 15.3294 13.0699 15.9653 12.6011 16.4341C12.1323 16.9029 11.4964 17.1663 10.8333 17.1663H5C4.33696 17.1663 3.70107 16.9029 3.23223 16.4341C2.76339 15.9653 2.5 15.3294 2.5 14.6663V6.33301C2.5 5.66997 2.76339 5.03408 3.23223 4.56524C3.70107 4.0964 4.33696 3.83301 5 3.83301H10.8333C11.4964 3.83301 12.1323 4.0964 12.6011 4.56524C13.0699 5.03408 13.3333 5.66997 13.3333 6.33301V7.16634"
          stroke="#F9FAFB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </PrimaryButton>
    <p class="font-bold text-sm mt-6 mb-6">O</p> -->
    <button
      type="button"
      @click="signIn('google', { redirect: false, callbackUrl: '/' })"
      class="text-white bg-[#659CF5] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm w-80 px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
    >
      <svg
        class="w-4 h-4 me-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 19"
      >
        <path
          fill-rule="evenodd"
          d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
          clip-rule="evenodd"
        />
      </svg>
      Entrá con Google
    </button>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/",
  },
});
const route = useRoute();
const signIn = useAuth().signIn;
</script>

<style></style>
