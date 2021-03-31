<template>
  <div class="flex h-screen">
    <div
      class="m-auto bg-white overflow-hidden shadow rounded-lg w-full md:w-1/3"
    >
      <div class="px-4 py-5 sm:p-6">
        <Nav />

        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  components: {
    Nav,
  },
};
</script>
