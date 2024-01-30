import { HStack, Image, Text } from '@chakra-ui/react'
// 导入logo图片
import logo from '../assets/logo.webp'

const NavBar = () => {
  return (
    // 横向排列组件
    <HStack>
      {/* 图片组件 图片源及尺寸*/}
      <Image src={logo} boxSize='60px' />
      {/* 文本组件 */}
      <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar
