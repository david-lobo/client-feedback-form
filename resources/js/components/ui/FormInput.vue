<template>
  <form-control v-bind="$attrs">
    <template v-slot:input>
      <input
        :value="$attrs.modelValue"
        @input="handleChange"
        v-bind="$attrs"
        :class="classes()"
        class=" mt-1 block w-full border-2 shadow-sm py-3 px-4 focus:outline-none focus:ring-gray-900 focus:border-gray-900"
      >
    </template>
  </form-control>
</template>

<script>
import { computed } from '@vue/runtime-core';
import FormControl from "./FormControl.vue";

export default {
  inheritAttrs: false,
  components: {
    FormControl,
  },
  setup(props, context) {
    const classes = () => {
      let cls = 'border-gray-300';
      return cls;
    };
    const handleChange = (event) => {
      context.emit("update:modelValue", event.target.value);
      context.emit("input-change", event);
    };
    return {
      classes,
      handleChange,
    };
  },
};
</script>

<style>
</style>