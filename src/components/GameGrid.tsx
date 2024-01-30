import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react'
// 定义游戏对象界面
interface Game {
  id: number
  name: string
}
// 定义响应数据界面
interface FetchGamesResponse {
  count: number
  results: Game[] // 游戏对象数组
}
// 游戏网格布局函数
const GameGrid = () => {
  // 存储游戏列表/更新游戏列表/默认空数组
  const [games, setGames] = useState<Game[]>([]) // 界面类型游戏对象数组
  // 存储错误/更新错误/默认空字符串
  const [error, setError] = useState('')
  // 渲染后效果钩子
  useEffect(() => {
    // 自定义的请求组件
    apiClient
      .get<FetchGamesResponse>('/games') // 请求游戏列表端点/响应的界面类型
      .then(res => setGames(res.data.results)) // 更新游戏列表
      .catch(err => setError(err.message)) // 异常时错误信息
  })
  // 返回视图
  return (
    <>
      {/* 如果有错误则显示错误提示 */}
      {error && <Text>{error}</Text>}
      <ul>
        {games.map(game => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  )
}

export default GameGrid
