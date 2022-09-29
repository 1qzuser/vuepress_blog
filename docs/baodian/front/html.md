## 1.html 语义化

> 意义：根据内容的结构化（内容语义化），选择合适的标签（代码语义化）便于开发者阅读和写出更优雅的代码的同时让浏览器的爬虫和机器很好地解析。

1. 尽可能少的使用无语义的标签 div 和 span；
2. 在语义不明显时，既可以使用 div 或者 p 时，尽量用 p, 因为 p 在默认情况下有上下间距，对兼容特殊终端有利；
3. 不要使用纯样式标签，如：b、font、u 等，改用 css 设置。
4. 需要强调的文本，可以包含在 strong 或者 em 标签中（浏览器预设样式，能用 CSS 指定就不用他们），strong 默认样式是加粗（不要用 b），em 是斜体（不用 i）；
5. 使用表格时，标题要用 caption，表头用 thead，主体部分用 tbody 包围，尾部用 tfoot 包围。表 头和一般单元格要区分开，表头用 th，单元格用 td；
6. 表单域要用 fieldset 标签包起来，并用 legend 标签说明表单的用途；
7. 每个 input 标签对应的说明文本都需要使用 label 标签，并且通过为 input 设置 id 属性，在 lable 标签中设置 for=someld 来让说明文本和相对应的 input 关联起来。

## 2.canvas 相关

1. fillRect(x,y,width,height)实心矩形
2. strokeRect(x,y,width,height)空心矩形
3. fillText( "Hello world" , 200 , 200 );实心文字
4. strokeText( "Hello world" , 200 , 300 )空心文字

## 3.svg 和 canvas 的区别？

1. canvas 时 h5 提供的新的绘图方法 ；svg 已经有了十多年的历史
2. canvas 画图基于像素点，是位图，如果进行放大或缩小会失真 ；svg 基于图形，用 html 标签描绘形状，放大缩小不会失真
3. canvas 需要在 js 中绘制 ；svg 在 html 绘制
4. canvas 支持颜色比 svg 多
5. canvas 无法对已经绘制的图像进行修改、操作 ；svg 可以获取到标签进行操作

## 4.html5 有哪些新特性?

1. HTML5 主要是关于图像，位置，存储，多任务等功能的增加。
2. 拖拽释放(Drag and drop) API
3. 语义化更好的内容标签（header,nav,footer,aside,article,section）
4. 音频、视频 API(audio,video)
5. 画布(Canvas) API
6. 地理(Geolocation) API
7. 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；
8. sessionStorage 的数据在浏览器关闭后自动删除
9. 表单控件，calendar、date、time、email、url、search

## 5.使用 display:inline-block 会产生什么问题？解决方法？

- 问题: 两个 display：inline-block 元素放到一起会产生一段空白。
- 产生空白的原因: 元素被当成行内元素排版的时候，元素之间的空白符（空格、回车换行等）都会被浏览器处理，根据 CSS 中 white-space 属性的处理方式（默认是 normal，合并多余空白），原来 HTML 代码中的回车换行被 转成一个空白符，在字体不为 0 的情况下，空白符占据一定宽度，所以 inline-block 的元素之间就出现了空隙。

- 解决办法：

（1）将子元素标签的结束符和下一个标签的开始符写在同一行或把所有子标签写在同一行

（2）父元素中设置 font-size: 0，在子元素上重置正确的 font-size

（3）为子元素设置 float:left

## 6.什么是 BFC？

W3C 对 BFC 的定义如下： 浮动元素和绝对定位元素，非块级盒子的块级容器（例如 inline-blocks, tablecells, 和 table-captions），以及 overflow 值不为"visiable"的块级盒子，都会为他们的内容创建新的 BFC（Block Fromatting Context， 即块级格式上下文）。

## 7.BFC 渲染规则

1. BFC 垂直方向边距重叠
2. BFC 的区域不会与浮动元素的 box 重叠
3. BFC 是一个独立的容器，外面的元素不会影响里面的元素
4. 计算 BFC 高度的时候浮动元素也会参与计算

## 8. 说一下你知道的 position 属性，都有啥特点？

- static：无特殊定位，对象遵循正常文档流。top，right，bottom，left 等属性不会被应用。
- relative：对象遵循正常文档流，但将依据 top，right，bottom，left 等属性在正常文档流中偏移位置。而其层叠通过 z-index 属性定义。
- absolute：对象脱离正常文档流，使用 top，right，bottom，left 等属性进行绝对定位。而其层叠通过 z-index 属性定义。
- fixed：对象脱离正常文档流，使用 top，right，bottom，left 等属性以窗口为参考点进行定位，当出现滚动条时，对象不会随着滚动。而其层叠通过 z-index 属性定义。
- sticky：具体是类似 relative 和 fixed，在 viewport 视口滚动到阈值之前应用 relative，滚动到阈值之后应用 fixed 布局，由 top 决定