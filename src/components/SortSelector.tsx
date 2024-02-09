import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
  onSelectSortOrder: (sortOrder: string) => void // 点击选择获取排序标签函数
  sortOrder: string // 当前排序值
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  // 定义数组对象/排序值与标签的映射关系
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: 'released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ]
  // 根据已定义的排序数组对象/找到对应的当前排序值对象
  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)

  return (
    <Menu>
      {/* 定义菜单按钮形式 */}
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {/* 如果当前有排序对象/则显示其label/否则没有默认显示/可选性 */}
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      {/* 下拉菜单列表 */}
      <MenuList>
        {sortOrders.map(order => (
          <MenuItem
            key={order.value}
            // value={order.value}
            // 选择当前排序值
            onClick={() => onSelectSortOrder(order.value)}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
