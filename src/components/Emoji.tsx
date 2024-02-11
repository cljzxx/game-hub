import bullEye from '../assets/bulls-eye.webp'
import thumbsUp from '../assets/thumbs-up.webp'
import meh from '../assets/meh.webp'
import { Image, ImageProps } from '@chakra-ui/react'

// 游戏评级参数
interface Props {
  rating: number
}
// 表情符号组件
const Emoji = ({ rating }: Props) => {
  // 如果评级小于3则返回空
  if (rating < 3) return null
  // 定义对象映射/对象类型必须指明/键是数字类型/值是图像属性参数类型
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '25px' },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
    5: { src: bullEye, alt: 'exceptional', boxSize: '35px' },
  }
  return (
    // 根据评级参数/展开对象映射（注意：属性要有{}包围/才能写变量规则）
    <Image {...emojiMap[rating]} marginTop={1} />
  )
}

export default Emoji
