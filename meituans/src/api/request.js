import axios from "axios";

const baseUrl = ''
class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            header: {}
        }
        return config
    }
    interceptors(instance) {
        // 添加请求拦截器
        instance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
            const { data, code } = response.data
            if (code == 200) {
                return data
            } else {

            }
            // return response;
        }, function (error) {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }
    request(options) {
        const instance = axios.create()
        //首先通过 axios.create() 创建了一个 Axios 实例 instance。然后使用扩展运算符 ... 将默认配置与传入的配置合并成一个新的 options 对象。
        options = { ...this.getInsideConfig(), ...options }
        //调用 this.interceptors(instance) 方法，该方法会添加请求拦截器和响应拦截器。interceptors 是指 Axios 的拦截器，可以在请求发送前或响应返回后对相关信息进行处理。
        this.interceptors(instance)
        //将 options 传递给 Axios 实例 instance 并返回用于发起请求的 Promise 对象。
        return instance(options)
    }
}

export default new HttpRequest(baseUrl)