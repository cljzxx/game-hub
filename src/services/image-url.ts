// 自定义图片裁剪工具（参数：图片地址）
const getCroppedImageUrl = (url: string) => {
  // 目标路径字段
  const target = 'media/'
  // 图片地址中第一次出现'media/'的索引位置+'media/'的长度==结束位置索引
  const index = url.indexOf(target) + target.length
  // 返回从头开始到指定结束位置的索引切片网址+裁剪参数
  // +指定结束位置索引之后的剩余网址==加入裁剪参数后的完整网址
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}
export default getCroppedImageUrl
