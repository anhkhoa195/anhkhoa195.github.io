<template>
  <div class="private-layout">
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'PrivateLayout',
  data() {
    return {
      isLogin: true,
    };
  },
};
</script>
<style lang="scss">
.private-layout {
  width: 100%;
  height: 100vh;
}
</style>
