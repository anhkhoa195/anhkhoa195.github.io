<template>
  <div class="form-admin">
    aa
    <NuxtChild />
  </div>
</template>

<script>
export default {
  name: 'Admin',
  layout: 'private-layout',
};
</script>

<style>
.form-admin {
  background-color: aquamarine;
  width: 100%;
  height: 100%;
  padding: 20px;
}
</style>
