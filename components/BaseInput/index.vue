<template>
  <v-text-field v-model="value" label="Outlined" outlined dense></v-text-field>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<style></style>
