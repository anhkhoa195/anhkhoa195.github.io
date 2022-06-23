<template>
  <v-app>
    <div class="private-layout">
      <Nuxt />
      <Footer />
    </div>
  </v-app>
</template>
<script>
export default {
  name: 'PrivateLayout',
  data() {
    return {
      isLogin: true,
      titleButton: 'Login',
    };
  },
};
</script>
<style lang="scss">
.private-layout {
  width: 100%;
  height: 100vh;
  background-color: $background-color;
  color: $text-color;
}
</style>
