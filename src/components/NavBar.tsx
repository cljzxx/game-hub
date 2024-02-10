import { HStack, Image } from '@chakra-ui/react'
// 导入logo图片
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

// 定义回调函数/查询方法及参数
interface Props {
  onSearch: (searchText: string) => void
}

const NavBar = ({ onSearch }: Props) => {
  return (
    // 横向排列组件/设置内边距
    <HStack padding='10px'>
      {/* 图片组件/图片源及尺寸*/}
      <Image src={logo} boxSize='60px' />
      {/* 搜索框组件/传递函数作为参数 */}
      <SearchInput onSearch={onSearch} />
      {/* 颜色模式切换组件 */}
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
