import axios from 'axios';

const client = axios.create();

// client.interceptors.request.use(async (config) => {
  

//   if (!token) return config;

//   if (config.headers) {
//     if (config.url === endpoints.clarifaiURL) {
//       config.headers.Authorization = `Key ${clarifaiApiKey}`;
//     } else {
//       config.headers.Authorization = token;
//     }
//   }

//   return config;
// });

client.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error.message);
  }
);

export default client;
