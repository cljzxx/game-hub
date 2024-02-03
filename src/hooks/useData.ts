import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'
// 通用响应数据界面（通用类型<T>参数）
interface FetchResponse<T> {
  count: number
  results: T[]
}
// 通用数据钩子组件（通用类型<T>参数）
const useData = <T>(endpoint: string) => {
  // 存储数据列表/更新数据列表/默认空数组
  const [data, setData] = useState<T[]>([]) // 通用类型数据（对象数组）
  // 存储错误/更新错误/默认空字符串
  const [error, setError] = useState('')
  // 加载状态/切换加载状态
  const [isLoading, setLoading] = useState(false)
  // 渲染后效果钩子 (注意[endpoint]结尾)
  useEffect(() => {
    // 取消请求控制器
    const controller = new AbortController()
    setLoading(true) // 开启加载状态
    // 通用请求端点数据（响应类型+通用类型<T>参数）
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal }) // 捕捉信道
      .then(res => {
        setData(res.data.results) // 更新数据列表
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
  }, [endpoint])
  // 返回对象（属性及方法）
  return { data, error, isLoading }
}

export default useData