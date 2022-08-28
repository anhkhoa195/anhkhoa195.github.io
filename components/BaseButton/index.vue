<template>
  <v-btn :disabled="disabled" :color="colorBtn" :height="height" :width="width" :rounded="isRounded">{{ titleBtn }}</v-btn>
</template>
<script>
export default {
  name: 'BaseButton',
  props: {
    colorBtn: {
      type: String,
      default: 'primary',
    },
    titleBtn: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    height: {
      type: Number,
      default: 50,
    },
    width: {
      type: Number,
      default: 150,
    },
    isRounded: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<style></style>
