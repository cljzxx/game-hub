import { HStack, Image } from '@chakra-ui/react'
// 导入logo图片
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    // 横向排列组件/设置内边距
    <HStack padding='10px'>
      {/* 图片组件/图片源及尺寸*/}
      <Image src={logo} boxSize='60px' />
      {/* 搜索框组件 */}
      <SearchInput />
      {/* 颜色模式切换组件 */}
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
