import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * `api` is an instance of Axios with a predefined base URL.
 *
 * @description
 * This instance is created using the `Axios.create` method with the `baseURL` set to "https://snappfood.ir".
 * This `api` instance is used to send HTTP requests to the server.
 */
export const api = Axios.create({
  baseURL: "https://api.github.com",
});

/**
 * Request interceptor
 *
 * @description
 * Before a request is sent, the interceptor checks if there is a token in the local storage.
 * If a token exists, it is added to the Authorization header of the request.
 */
api.interceptors.request.use(
  async (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

/**
 * Response interceptor
 *
 * @description
 * After a response is received, the interceptor simply returns the response.
 * If an error occurs, the interceptor rejects the promise with the error.
 */
api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

/**
 * `request` is an object that contains methods for sending HTTP requests using the `api` instance.
 *
 * @description
 * Each method corresponds to an HTTP verb (get, post, put, patch, delete, options, head).
 * The methods take the endpoint as the first argument, and an optional configuration object as the second argument.
 * The configuration object can include any valid Axios request configuration.
 * The methods return a promise that resolves to the server's response.
 */
const request = {
  get: <T>(
    endpoint: string,
    options: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T>> => {
    return api.get(endpoint, options);
  },
  post: (
    endpoint: string,
    data?: unknown,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse> => {
    return api.post(endpoint, options);
  },
  put: (
    endpoint: string,
    data: unknown,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse> => {
    return api.put(endpoint, data, options);
  },
  patch: (
    endpoint: string,
    data?: unknown,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse> => {
    return api.patch(endpoint, Object.assign({}, data), options);
  },
  delete: (
    endpoint: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse> => {
    return api.delete(endpoint, options);
  },
  options: (
    endpoint: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse> => {
    return api.options(endpoint, options);
  },

  head: (
    endpoint: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse> => {
    return api.head(endpoint, options);
  },
};

export default request;
