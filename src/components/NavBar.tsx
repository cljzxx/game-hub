import { HStack, Image } from '@chakra-ui/react'
// 导入logo图片
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    // 横向排列组件/两端对齐/设置内边距
    <HStack justifyContent='space-between' padding='10px'>
      {/* 图片组件/图片源及尺寸*/}
      <Image src={logo} boxSize='60px' />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
