import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
  // 切换颜色模式钩子
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    // 横向排列
    <HStack>
      {/* 切换按钮/绿色/默认开启深色/触发切换颜色模式 */}
      <Switch
        colorScheme='green'
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      {/* 文本组件 */}
      <Text>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch
