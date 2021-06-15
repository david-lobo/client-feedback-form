<template>
  <form-control v-bind="$attrs">
    <template v-slot:input>
      <textarea
        :value="$attrs.modelValue"
        @input="handleChange"
        v-bind="$attrs"
        class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 border-2"
      />
    </template>
  </form-control>
</template>

<script>
import FormControl from "./FormControl.vue";

export default {
  inheritAttrs: false,
  components: {
    FormControl,
  },
  setup(props, context) {
    const handleChange = (event) => {
      context.emit("update:modelValue", event.target.value);
      context.emit("input-change", event);
    };
    return {
      handleChange,
    };
  },
};
</script>

<style>
</style>