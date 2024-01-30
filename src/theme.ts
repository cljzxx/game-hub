import { extendTheme, ThemeConfig } from '@chakra-ui/react'
// 定义设置别名注释
const config: ThemeConfig = {
  initialColorMode: 'dark',
}
// 设置主题
const theme = extendTheme({ config })
// 导出默认主题
export default theme
