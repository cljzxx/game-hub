import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

// 定义传递回调函数
interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenreId?: number // 选择流派ID/可选性
}

// 流派列表组件（已选中参数，回调函数参数）
const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
  // 使用流派钩子
  const { data, isLoading, error } = useGenres()
  // 如果侧边栏发生异常错误则返回空，不提示也不渲染
  if (error) return null
  // 如果加载中则显示Spinner组件
  if (isLoading) return <Spinner />
  return (
    <>
      {/* 流派标题 */}
      <Heading fontSize={'2xl'} marginBottom={3}>
        Genre
      </Heading>
      {/* 列表组件/项目组件/横向排列/图片组件/文本组件 */}
      <List>
        {/* 从data.results获取数据 */}
        {data?.results.map(genre => (
          <ListItem key={genre.id} paddingY={'5px'}>
            <HStack>
              <Image
                boxSize={'32px'}
                borderRadius={8}
                objectFit={'cover'} // 图片自适应填充
                // 使用裁剪组件处理图片
                src={getCroppedImageUrl(genre.image_background)}
              />
              {/* 按钮组件/点击效果/点击事件 */}
              <Button
                whiteSpace={'normal'} // 自动换行
                textAlign={'left'} // 文本左对齐
                // 字体粗细根据当前列表流派id等于已选中流派id来判断
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                onClick={() => onSelectGenre(genre)}
                fontSize={'large'}
                variant={'link'}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}
export default GenreList
