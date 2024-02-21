import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
// 以上是各种游戏平台icon的引入
import { HStack, Icon } from '@chakra-ui/react'
import { Platform } from '../hooks/usePlatforms'
import { IconType } from 'react-icons'
// 定义参数界面（数组对象）
interface Props {
  platforms: Platform[]
}
// 游戏平台图标组件
const PlatformIconList = ({ platforms }: Props) => {
  // 图标映射对象/其中key由string类型指定成IconType类型
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows, // slug对应icon
    playstation: FaPlaystation, // slug对应icon
    xbox: FaXbox, // slug对应icon
    nintendo: SiNintendo, // slug对应icon
    mac: FaApple, // slug对应icon
    linux: FaLinux, // slug对应icon
    android: FaAndroid, // slug对应icon
    ios: MdPhoneIphone, // slug对应icon
    web: BsGlobe, // slug对应icon
  }
  return (
    // 横向排列/垂直外边距/默认{1}等于4px
    <HStack marginY={1}>
      {platforms.map(platform => (
        // Icon组件的as属性对应obj[key]的映射关系/颜色格式
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />
      ))}
    </HStack>
  )
}

export default PlatformIconList
