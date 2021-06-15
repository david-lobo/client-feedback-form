<template>
  <header class="header -top-0 fixed w-full bg-white z-20">
    <app-messenger />
  </header>
  <client-feedback-page></client-feedback-page>
</template>

<script>
import AppMessenger from "./components/layout/AppMessenger.vue";
import ClientFeedbackPage from "./pages/ClientFeedbackPage/ClientFeedbackPage.vue";

export default {
  components: {
    ClientFeedbackPage,
    AppMessenger,
  },
};
</script>

<style>
</style>