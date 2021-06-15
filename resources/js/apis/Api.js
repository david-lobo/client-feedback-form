import axios from "axios";
import { handleResponse } from '../utils/axios'; 
import useAppMessenger from '../composables/useAppMessenger';

let Api = axios.create({
  baseURL: "http://localhost:3000/api"
});

const { showAppMessage } = useAppMessenger();

Api.defaults.withCredentials = true;
Api.defaults.validateStatus = function (status) {
  return (status === 401 || status === 422 || (status >= 200 && status < 300)); // default
};
Api.interceptors.response.use((response) => {
  return handleResponse(response);
}, (error) => {
  // whatever you want to do with the error
  showAppMessage('Sorry! Something went wrong');
  throw error;
});

export default Api;