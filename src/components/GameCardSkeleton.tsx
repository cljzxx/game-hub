import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

// 游戏卡片骨架屏组件
const GameCardSkeleton = () => {
  return (
    <Card width='300px' borderRadius={10} overflow='hidden'>
      {/* 骨架屏组件 */}
      <Skeleton height='200px' />
      <CardBody>
        {/* 骨架屏组件 */}
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton
