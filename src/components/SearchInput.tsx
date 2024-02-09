import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

// 搜索框组件
const SearchInput = () => {
  return (
    // 表单组包裹
    <InputGroup>
      {/* 表单左侧元素/子代参数/搜索图标 */}
      <InputLeftElement children={<BsSearch />} />
      {/* 圆角/默认填充/已填充装饰 */}
      <Input
        borderRadius={20}
        placeholder='Search games...'
        variant={'filled'}
      />
    </InputGroup>
  )
}

export default SearchInput
