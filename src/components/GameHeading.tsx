import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import { useState } from 'react'
import useGenres from '../hooks/useGenres'
import usePlatforms from '../hooks/usePlatforms'
// 定义游戏查询参数
interface Props {
  gameQuery: GameQuery
}
// 游戏标题组件
const GameHeading = ({ gameQuery }: Props) => {
  // 获取流派数据/并且别名
  const { data: genres } = useGenres()
  // 通过流派数据结果数组/找到ID相同的数据对象
  const genre = genres?.results.find(g => g.id === gameQuery.genreId)

  // 获取平台数据/并且别名
  const { data: platforms } = usePlatforms()
  // 通过平台数据结果数组/找到ID相同的数据对象
  const platform = platforms?.results.find(p => p.id === gameQuery.platformId)

  // 自定义变量标题（可选性/或为空）
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
  return (
    <Heading as={'h1'} marginY={5} fontSize={'5xl'}>
      {heading}
    </Heading>
  )
}

export default GameHeading
