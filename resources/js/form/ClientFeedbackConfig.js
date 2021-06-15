export default {
  rules: {
    name: ['required', 'string'],
    email: ['required', 'email'],
    message: ['required', 'string'],
    website: ['string'],
  },
  defaultValues: {
    categories: []
  }
};