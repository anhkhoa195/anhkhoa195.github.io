<template>
  <div>{{ foobar }}123</div>
</template>

<script>
export default {
  name: 'ChildServices',
  props: {
    foobar: {
      type: String,
      default: '',
    },
  },
};
</script>

<style></style>
