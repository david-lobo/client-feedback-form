import Api from "./Api";

export default {
  async feedback(form) {
    return Api.post('/feedback', form);
  },
};

