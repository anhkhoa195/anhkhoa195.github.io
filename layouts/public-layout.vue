<template>
  <div :class="['public-layout', isDayTime ? 'day-time' : 'night-time']">
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "PublicLayout",
  data() {
    return {};
  },
  computed: {
    isDayTime() {
      const currentTime = new Date().getHours();
      return Number(currentTime) > 6 && Number(currentTime) < 18;
    },
  },
  beforeCreate() {},
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.public-layout {
  width: 100%;
  height: 100%;
  color: $color-black-base;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}
.day-time {
  background-image: url("~@/assets/images/day-time.png");
}
.night-time {
  background-image: url("~@/assets/images/night-time.png");
}
</style>
