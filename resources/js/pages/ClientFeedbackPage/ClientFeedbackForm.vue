<template>

  <form
    @submit.prevent="handleSubmit"
    class="grid grid-cols-1 gap-y-6"
  >
    <div>
      <form-input
        @input-change="handleInputChange"
        v-model="name"
        label="Name"
        name="name"
        placeholder=""
        :errors="fieldErrors('name')"
        :is-required="true"
      />
    </div>
    <div>
      <form-input
        @input-change="handleInputChange"
        v-model="email"
        label="Email Address"
        name="email"
        placeholder=""
        :errors="fieldErrors('email')"
        :is-required="true"
      />
    </div>
    <div>
      <form-input
        @input-change="handleInputChange"
        v-model="website"
        label="Website URL"
        name="website"
        placeholder=""
        :errors="fieldErrors('website')"
        :is-required="false"
      />
    </div>
    <div>
      <form-textarea
        @input-change="handleInputChange"
        id="message"
        name="message"
        rows="4"
        placeholder=""
        v-model="message"
        label="Your message to us"
        :errors="fieldErrors('message')"
        :is-required="true"
      />
    </div>
    <div class="flex">
      <button
        type="submit"
        class="ml-auto text-white ml-3 inline-flex items-center justify-center px-6 py-3 border border-transparent shadow-sm text-base font-medium text-white bg-pink hover:bg-pink-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-light"
      >
        Save
      </button>
    </div>
  </form>

</template>

<script>
import FormInput from "../../components/ui/FormInput.vue";
import FormTextarea from "../../components/ui/FormTextarea.vue";
import useClientFeedbackForm from "../../composables/useClientFeedbackForm";

export default {
  setup(props, ctx) {
    const { fields, form } = useClientFeedbackForm();
    const { name, email, website, message } = fields;

    const {
      errors,
      touched,
      isLoading,
      validateForm,
      fieldErrors,
      submitForm,
      clearForm,
      setFormData,
    } = form;

    clearForm();

    const handleInputChange = (e) => {
      touched.value[e.target.name] = true;
      validateForm();
    };

    const handleSubmit = (e) => {
      touched.value[e.target.name] = true;
      submitForm(ctx);
    };
    return {
      ...fields,
      fieldErrors,
      handleInputChange,
      handleSubmit,
    };
  },
  components: {
    FormInput,
    FormTextarea,
  },
};
</script>