import Mock from 'mockjs'
import homeApi from './mockData/homeApi'
Mock.mock('/home/getHomeData', homeApi.getHomeData)