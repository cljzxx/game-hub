import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
} from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

// 定义传递回调函数
interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null // 定义已选择参数
}

// 流派列表组件（已选中参数，回调函数参数）
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  // 使用流派钩子
  const { data, isLoading, error } = useGenres()
  // 如果侧边栏发生异常错误则返回空，不提示也不渲染
  if (error) return null
  // 如果加载中则显示Spinner组件
  if (isLoading) return <Spinner />
  return (
    // 列表组件/项目组件/横向排列/图片组件/文本组件
    <List>
      {data.map(genre => (
        <ListItem key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image
              boxSize={'32px'}
              borderRadius={8}
              // 使用裁剪组件处理图片
              src={getCroppedImageUrl(genre.image_background)}
            />
            {/* 按钮组件/点击效果/点击事件 */}
            <Button
              // 字体粗细根据当前列表流派id等于已选中流派id来判断
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              onClick={() => onSelectGenre(genre)}
              fontSize={'large'}
              variant={'link'}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}
export default GenreList
