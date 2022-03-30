import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';
import {
  convertToCamelCase,
  convertToSnakeCase,
} from '~/helper/string_converter';
import { environments } from '~/config/environments';

const axiosClient = axios.create({
  baseURL: environments.axios.rootUrl,
  paramsSerializer(params) {
    return qs.stringify(convertToSnakeCase(params));
  },

  validateStatus(status) {
    return status < 500;
  },
});

axiosClient.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers = {
    ...config.headers,
  };
  config.data = convertToSnakeCase(config.data);
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    response.data = convertToCamelCase(response.data);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export class HttpClient {
  public get(url: string, params: any): Promise<AxiosResponse> {
    return axiosClient.get(url, { params: params });
  }
  public post(url: string, params: any): Promise<AxiosResponse> {
    return axiosClient.post(url, params);
  }
  public put(url: string, params: any): Promise<AxiosResponse> {
    return axiosClient.put(url, params);
  }
  public delete(url: string, params: any): Promise<AxiosResponse> {
    return axiosClient.delete(url, { data: params });
  }
}
