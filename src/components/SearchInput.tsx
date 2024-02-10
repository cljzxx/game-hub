import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
// 定义回调函数/查询方法及参数
interface Props {
  onSearch: (searchText: string) => void
}
// 搜索框组件
const SearchInput = ({ onSearch }: Props) => {
  // 用ref钩子/绑定表单元素
  const ref = useRef<HTMLInputElement>(null)
  return (
    // 表单包裹/提交查询方法/带搜索值
    <form
      onSubmit={event => {
        event.preventDefault() // 阻止默认表单提交
        // 如果当前表单有效/使用查询方法传递参数
        if (ref.current) onSearch(ref.current.value)
      }}>
      {/* 表单组包裹 */}
      <InputGroup>
        {/* 表单左侧元素/子代参数/搜索图标 */}
        <InputLeftElement children={<BsSearch />} />
        {/* 圆角/默认填充/已填充装饰 */}
        <Input
          ref={ref}
          borderRadius={20}
          placeholder='Search games...'
          variant={'filled'}
        />
      </InputGroup>
    </form>
  )
}

export default SearchInput
