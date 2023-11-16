import { ofetch } from 'ofetch';

export default defineNuxtPlugin(() => {
  globalThis.$fetch = ofetch.create({
    onRequest({ request, options }) {
      console.log(request)
    },
    onResponse({ request, response, options }) {
      console.log('response', response._data);
    }
  });
});
