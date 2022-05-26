import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';
import qs from 'qs';

// 返回值类型
export interface Result<T = any> {
  code: number;
  msg: string;
  data: T;
}

enum StatusCode {
  NoAuth = 600,
  Success = 200
}

class Requset {
  private instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors();
  }
  private interceptors() {
    // 请求拦截
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        if (config.headers) {
          const token = '';
          if (token) {
            config.headers.token = token;
          }
        }
        return config;
      },
      (error: any) => {
        // 对请求错误做些什么
        error.data = {};
        error.data.msg = '服务器异常，请联系管理员';
        return error;
      }
    );
    // 响应拦截
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        if (res && res.data) {
          const data = res.data;
          if (data.code === StatusCode.NoAuth) {
            // 跳转到登录
          } else if (data.code === StatusCode.Success) {
            return res;
          } else {
            ElMessage.error(data.msg || '服务器出错');
            return res || null;
          }
        }
      },
      (error) => {
        // 这里是遇到报错的回调
        // console.log('进入错误');
        error.data = {};
        if (error && error.response) {
          switch (error.response.status) {
            case 400:
              error.data.msg = '错误请求';
              ElMessage.error(error.data.msg);
              break;
            case 401:
              error.data.msg = '未授权，请重新登录';
              ElMessage.error(error.data.msg);
              break;
            case 403:
              error.data.msg = '拒绝访问';
              ElMessage.error(error.data.msg);
              break;
            case 404:
              error.data.msg = '请求错误,未找到该资源';
              ElMessage.error(error.data.msg);
              break;
            case 405:
              error.data.msg = '请求方法未允许';
              ElMessage.error(error.data.msg);
              break;
            case 408:
              error.data.msg = '请求超时';
              ElMessage.error(error.data.msg);
              break;
            case 500:
              error.data.msg = '服务器端出错';
              ElMessage.error(error.data.msg);
              break;
            case 501:
              error.data.msg = '网络未实现';
              ElMessage.error(error.data.msg);
              break;
            case 502:
              error.data.msg = '网络错误';
              ElMessage.error(error.data.msg);
              break;
            case 503:
              error.data.msg = '服务不可用';
              ElMessage.error(error.data.msg);
              break;
            case 504:
              error.data.msg = '网络超时';
              ElMessage.error(error.data.msg);
              break;
            case 505:
              error.data.msg = 'http版本不支持该请求';
              ElMessage.error(error.data.msg);
              break;
            default:
              error.data.msg = `连接错误${error.response.status}`;
              ElMessage.error(error.data.msg);
          }
        } else {
          error.data.msg = '连接到服务器失败';
          ElMessage.error(error.data.msg);
        }
        // return Promise.reject(error)
        return error;
      }
    );
  }

  getParms(parms: any): string {
    let _params = '';
    if (Object.is(parms, undefined || null)) {
      _params = '';
    } else {
      for (const key in parms) {
        if (parms.hasOwnProperty.call(parms, key) && parms[key]) {
          _params += `${parms[key]}/`;
        }
      }
    }
    //去掉参数最后一位/
    if (_params) _params = _params.substr(0, _params.length - 1);
    return _params;
  }

  /**
   * http://localhost:8089/api/user/getUserById?userId=10
   * @param url /api/user/getUserById
   * @param parms {userId:10}
   * @returns
   */
  get<T = any>(url: string, parms?: any): Promise<Result<T>> {
    return new Promise((resolve, reject) => {
      this.instance
        .get<T>(url, {
          params: parms,
          paramsSerializer: (parms) => {
            return qs.stringify(parms);
          }
        })
        .then((res) => {
          resolve(res.data as any);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  // 兼容REST API
  getRestApi<T = any>(url: string, parms?: any): Promise<Result<T>> {
    return new Promise((resolve, reject) => {
      this.instance
        .get<T>(this.getParms(parms) ? `${url}/${this.getParms(parms)}` : url)
        .then((res) => {
          resolve(res.data as any);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default Requset;
