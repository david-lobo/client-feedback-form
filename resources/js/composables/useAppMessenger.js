import { ref } from "@vue/reactivity";

const isShow = ref(false);
const message  = ref(null);

const useAppMessenger = () => {
  const showAppMessage = (newMessage) => {
    
    message.value = newMessage;
    isShow.value = true;
  };

  const hideAppMessage = () => {
    isShow.value = false;
  };

  return { 
    show: isShow,
    message,
    showAppMessage,
    hideAppMessage
  }
}

export default useAppMessenger;