import { ref } from "@vue/reactivity";
import useClientFeedbackFormData from "./useClientFeedbackFormData.js";
import useForm from "./useForm.js";
import ClientFeedback from "../apis/ClientFeedback";
import config  from "../form/ClientFeedbackConfig";

const { rules, defaultValues } = config;

const useClientFeedbackForm = () => {
  const fields = useClientFeedbackFormData();
  const form = useForm(fields, rules, defaultValues, ClientFeedback.feedback);
  const { setSuccessMessage } = form;
  setSuccessMessage('Your feedback has been sent');
  
  return { fields, form }
}

export default useClientFeedbackForm;