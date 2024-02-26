import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'
import usePlatform from '../hooks/usePlatform'

// 定义选择平台回调函数
interface Props {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatformId?: number // 选择平台ID/可选性
}
// 平台选择器组件
const PlatformSelector = ({ selectedPlatformId, onSelectPlatform }: Props) => {
  // 通过平台钩子获取数据
  const { data, error } = usePlatforms()

  // 使用钩子：传参ID获取平台对象
  const selectedPlatform = usePlatform(selectedPlatformId)

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
