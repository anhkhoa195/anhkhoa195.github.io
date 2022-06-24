<template>
  <div>
    <v-text-field
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show ? 'text' : 'password'"
      name="input-10-2"
      label="Visible"
      hint="At least 8 characters"
      value="wqfasds"
      class="input-group--focused"
      @click:append="show = !show"
    ></v-text-field>
    <v-text-field
      v-if="isPassword"
      :append-icon="show ? 'fa-thin fa-eye' : 'fa-thin fa-eye-off'"
      v-model="value"
      :label="label"
      :type="show ? 'text' : type"
      outlined
      dense
      @click:append="show = !show"
    ></v-text-field>
    <v-text-field v-else v-model="value" :label="label" :type="type" outlined dense></v-text-field>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
    displayField: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: this.displayField,
    };
  },
  computed: {
    isPassword() {
      return this.type === 'password';
    },
  },
};
</script>

<style></style>
