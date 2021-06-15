<template>
  <label
    :for="name"
    class="block text-md font-bold text-blue"
  >{{ label }}<span v-if="isRequired" class="text-pink">*</span></label>
  <div class="mt-1">
    <slot name="input"></slot>
  </div>
  <div
    v-if="errors && errors.length"
    class="inline-block bg-pink text-white px-2 py-1 mt-2"
  >{{ errors[0] }}</div>
  <p
    v-if="help"
    class="mt-2 text-sm text-gray-500"
    id="email-description"
  >{{ help }}</p>
</template>

<script>
export default {
  props: {
    modelValue: String,
    name: String,
    label: String,
    errors: Array,
    help: String,
    placeholder: String,
    isRequired: Boolean
  },
};
</script>

<style>
</style>