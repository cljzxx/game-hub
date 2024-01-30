import axios from 'axios'
// 导出默认/自定义请求方法
export default axios.create({
  // 基础请求地址
  baseURL: 'https://api.rawg.io/api',
  // 携带参数（API的Key）
  params: {
    key: '49e9fab7b38841b1895e96d11f4d0693',
  },
})
