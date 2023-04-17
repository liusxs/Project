import axios from "./request";
//这是首页的接口
export const getApiHomeData = (param) => {
    return axios.request({
        url: '/home/getHomeData',
        method: 'get',
        data: param
    })
}