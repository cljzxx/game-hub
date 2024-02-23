import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'

// 定义选择平台回调函数
interface Props {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatformId?: number // 选择平台ID/可选性
}
// 平台选择器组件
const PlatformSelector = ({ selectedPlatformId, onSelectPlatform }: Props) => {
  // 通过平台钩子获取数据
  const { data, error } = usePlatforms()

  // 通过平台数据结果数组/找到ID相同的数据对象
  const selectedPlatform = data?.results.find(p => p.id === selectedPlatformId)

  if (error) return null // 如果有错误则不显示

  return (
    <Menu>
      {/* 定义菜单按钮形式 */}
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {/* 参数不为空显示名称/否则显示默认 */}
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      {/* 下拉菜单列表 */}
      <MenuList>
        {/* 从data.results获取数据 */}
        {data?.results.map(platform => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
