import * as Validator from "validatorjs";
import { ref } from "@vue/reactivity";
import { handleResponse } from '../utils/axios';
import useAppMessenger from './useAppMessenger';
import { handleError } from "@vue/runtime-core";

const { showAppMessage } = useAppMessenger();

const useForm = (fields, rules, defaultValues, apiAction = null) => {
  const statusMessage = ref(null);
  const isLoading = ref(false);
  const errors = ref({});
  const touched = ref({});
  const isIgnoreTouched = ref(true);
  let successMessage = 'Request was successful';

  const validateFormData = (formData) => {
    let validation = new Validator(formData, rules);
    validation.setAttributeFormatter(function (attribute) {
      
      // adding space between strings
      const result = attribute.replace(/([A-Z])/g, ' $1');

      // converting first character to uppercase and join it to the final string
      const final = result.charAt(0) + result.slice(1);
      
      return final.toLowerCase();
    });
    function passes() {
      errors.value = [];
    }

    function fails() {
      setErrors(validation.errors.errors);
    }

    validation.checkAsync(passes, fails);
  };

  const getFormData = () => {
    const formData = {};
    Object.keys(fields).forEach((key, index) => {
      formData[key] = fields[key].value;
    });

    return formData;
  }

  const setErrors = (newErrors) => {
    errors.value = newErrors;
    setStatusMessage();
  };

  const setStatusMessage = () => {
    statusMessage.value = validationMessage();
  }

  const setSuccessMessage = (message) => {
    successMessage = message;
  }

  const setFormData = (data) => {
    Object.keys(fields).forEach((key, index) => {
      if (data && data[key]) {
        fields[key].value = data[key]
      } 
    });
  }

  const validateForm = () => {
    const formData = getFormData(fields)
    validateFormData(formData, rules)
  }

  const setTouchedFields = (value = false) => {
    Object.keys(rules).forEach((key, index) => {
      touched.value[key] = value;
    });
  };

  const fieldErrors = (field) => {
    if (!isIgnoreTouched.value && touched.value[field] === false) {
      return [];
    }
    return errors.value[field] ? errors.value[field] : [];
  };

  const hasValidationErrors = () => {
    return Object.keys(errors.value).length > 0;
  }

  const validationMessage = () => {
    const errorKeys = Object.keys(errors.value);
    if (errorKeys.length === 1) {
      return errors.value[errorKeys[0]][0]
    }
    const all = [];
    errorKeys.forEach((key, index) => {
      all.push(errors.value[key][0]);
    });
    return all[0];
  }

  const submitForm = async (context) => {
    statusMessage.value = null;
    isIgnoreTouched.value = true;
    const formData = getFormData();
    validateForm();
    const isValid = errors.value.length === 0;

    if (!isValid) {
      context.emit("validation-error", errors.value);
    } else {
      isLoading.value = true;
      context.emit("validation-success", formData);

      if (apiAction) {
        const handleResponse = await apiAction(formData);
        if (handleResponse.type === 'success') {
          context.emit("submit-success", handleResponse);
          statusMessage.value = successMessage;
          clearForm();
        } else {
          setErrors(handleResponse.errors);
          context.emit("submit-error", handleResponse);
        }
      }
    }
    if (statusMessage.value) {
      showAppMessage(statusMessage.value);
    }
  }

  const clearForm = () => {
    Object.keys(fields).forEach((key, index) => {
      if (defaultValues.hasOwnProperty(key)) {
        fields[key].value = defaultValues[key];
      } else {
        fields[key].value = null;
      }
    });
    setTouchedFields(false);
  };

  clearForm();

  return {
    errors,
    touched,
    isIgnoreTouched,
    isLoading,
    validateForm,
    getFormData,
    setFormData,
    setSuccessMessage,
    setTouchedFields,
    fieldErrors,
    submitForm,
    clearForm
  }
}

export default useForm;