import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'

// 平台选择器组件
const PlatformSelector = () => {
  // 通过平台钩子获取数据
  const { data, error } = usePlatforms()
  if (error) return null // 如果有错误则不显示
  return (
    <Menu>
      {/* 定义菜单按钮形式 */}
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      {/* 下拉菜单列表 */}
      <MenuList>
        {data.map(platform => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
