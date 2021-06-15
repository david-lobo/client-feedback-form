import { ref } from "@vue/reactivity";

const name = ref(null)
const email = ref(null)
const website = ref(null)
const message = ref(null)

const useClientFeedbackFormData = () => {
  return { name, email, website, message };
}

export default useClientFeedbackFormData;