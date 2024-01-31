import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'
// 定义游戏对象界面
export interface Game {
  id: number
  name: string
  background_image: string
}
// 定义响应数据界面
interface FetchGamesResponse {
  count: number
  results: Game[] // 游戏对象数组
}
// 游戏状态组件（hook）
const useGames = () => {
  // 存储游戏列表/更新游戏列表/默认空数组
  const [games, setGames] = useState<Game[]>([]) // 界面类型游戏对象数组
  // 存储错误/更新错误/默认空字符串
  const [error, setError] = useState('')

  // 渲染后效果钩子 (注意[]结尾)
  useEffect(() => {
    // 取消请求控制器
    const controller = new AbortController()
    // 自定义的请求组件/请求游戏列表端点/响应的界面类型
    apiClient
      .get<FetchGamesResponse>('/games', { signal: controller.signal }) // 捕捉信道
      .then(res => setGames(res.data.results)) // 更新游戏列表
      .catch(err => {
        // 如果err实例->来自于->错误类
        if (err instanceof CanceledError) return
        setError(err.message) // 异常时错误提示
      })
    // 取消请求
    return () => controller.abort()
  }, [])
  // 返回对象（属性及方法）
  return { games, error }
}
// 默认导出hook
export default useGames
