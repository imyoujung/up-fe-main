import _axios, { AxiosError, AxiosInstance } from 'axios';
import { removeAccessToken } from './useAccessToken';

interface ApiErrorRs<T extends string = string> {
  errorCode: T;
  errors: unknown[];
  httpStatus: string;
  message: string;
}

// query param format 맞춰주는 함수
// 안쓰면 query[]=value이렇게 전달됨.
// 기본 axios param format = a[]=1&a[]=2
// ParamsSerializer format = a=1,2
export const defaultParamsSerializer = (paramObj: Record<string, any>) => {
  const params = new URLSearchParams();
  Object.entries(paramObj)
    .filter(([_, value]) => value !== undefined)
    .forEach(([key, value]) => {
      params.append(key, value);
    });

  return params.toString();
};

/** axios 의 공통 설정을 할 수 있습니다. */
/** axios 를 사용할 경우 api 공통 처리를 위해 RequestClient 의 axios 인스턴스를 사용해주세요. */
export const baseURL: string = 'https://api-universe-place.kro.kr/';

export class RequestClient {
  private axiosInstance!: AxiosInstance;

  constructor() {
    this.init();
  }

  get axios() {
    return this.axiosInstance;
  }

  private init() {
    this.axiosInstance = _axios.create({ baseURL });
    this.axios.defaults.paramsSerializer = defaultParamsSerializer;
    this.setResponseInterceptor();
  }

  private setResponseInterceptor() {
    this.axiosInstance.interceptors.response.use(
      //응답성공
      (response) => response,
      // 에러처리
      (e: AxiosError<ApiErrorRs>) => {
        this.formatErrorResponse(e);
      },
    );
  }

  private formatErrorResponse(e: AxiosError<ApiErrorRs>) {
    if (!e.response) return Promise.reject(e);

    // 공통 authError 판별
    const { data, status } = e.response;
    const errorCode = data.errorCode;

    //401에러처리
    if (status === 401) {
      removeAccessToken();
      return (window.location.href = 'login');
    }

    return Promise.reject(e);
  }
}

const axios = new RequestClient().axios;

export const setAxiosHeader = (key: string, value: string) => {
  axios.defaults.headers.common[key] = value;
};

export { axios };
