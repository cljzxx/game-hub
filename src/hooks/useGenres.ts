import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'
// 定义类型对象界面
interface Genre {
  id: number
  name: string
}
// 定义响应数据界面
interface FetchGenresResponse {
  count: number
  results: Genre[]
}
// 类型钩子组件
const useGenres = () => {
  // 存储类型列表/更新类型列表/默认空数组
  const [genres, setGenres] = useState<Genre[]>([]) // 界面类型类型对象数组
  // 存储错误/更新错误/默认空字符串
  const [error, setError] = useState('')
  // 加载状态/切换加载状态
  const [isLoading, setLoading] = useState(false)

  // 渲染后效果钩子 (注意[]结尾)
  useEffect(() => {
    // 取消请求控制器
    const controller = new AbortController()
    // 自定义的请求组件/请求类型列表端点/响应的界面类型

    setLoading(true) // 开启加载状态

    // 封装自定义请求端点
    apiClient
      .get<FetchGenresResponse>('/genres', { signal: controller.signal }) // 捕捉信道
      .then(res => {
        setGenres(res.data.results) // 更新类型列表
        setLoading(false) // 停止加载状态
      })
      .catch(err => {
        // 如果err实例->来自于->错误类
        if (err instanceof CanceledError) return
        setError(err.message) // 异常时错误提示
        setLoading(false) // 停止加载状态
      })
    // 取消请求
    return () => controller.abort()
  }, [])
  // 返回对象（属性及方法）
  return { genres, error, isLoading }
}

export default useGenres
