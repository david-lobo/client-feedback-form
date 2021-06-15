<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div id="messenger" ref="target">
    <!-- Global notification live region, render this permanently at the end of the document -->
    <div
      aria-live="assertive"
      class="fixed inset-0 flex items-end pointer-events-none sm:items-start"
    >
      <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
        <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
        <transition
          enter-active-class="transform ease-out duration-300 transition"
          enter-from-class="translate-y-2 opacity-0 sm:translate-y-0"
          enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
          leave-active-class="transition ease-in duration-100"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="show"
            class="max-w-full w-full bg-pink text-white pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
          >
            <div class="p-4">
              <div class="flex items-start">
                <div class="ml-3 w-0 flex-1 pt-0.5">
                  <p class="text-center text-xl font-bold text-white">
                    {{ message }}
                  </p>
                </div>
                <div class="ml-4 flex-shrink-0 flex">
                  <button
                    @click="hideAppMessage"
                    class="inline-flex text-white hover:text-white focus:outline-none"
                  >
                    <span class="sr-only">Close</span>
                    <XIcon
                      class="h-7 w-7"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useAppMessenger from '../../composables/useAppMessenger';
import { onClickOutside } from '@vueuse/core';

export default {
  setup() {
    const target = ref(null)
    const { show, message, hideAppMessage } = useAppMessenger();
    onClickOutside(target, (event) => hideAppMessage())

    return {
      target,
      show,
      message,
      hideAppMessage
    };
  },
};
</script>