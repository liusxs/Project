import http from "../utils/request";

//请求首页数据
export const getData = () => {
    //返回一个promise对象
    return http.get('/home/getData')
}