<template lang="html">
  <div class="container">
    <div class="form-login">
      <BaseInput v-model="user_name" :label="$t('common.user_name')" />
      <BaseInput
        v-model="password"
        :label="$t('common.password')"
        type="password"
      />
      <BaseButton :titleBtn="titleButton" />
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
