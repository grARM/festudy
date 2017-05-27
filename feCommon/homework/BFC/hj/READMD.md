# BFC布局
## BFC 是什么
参考W3C对于BFC的定义，我们可以总结如下<br/>
1. 正常的文档流中，组成页面的基本单位是box，box一共分为两种，分别是BFC和IFC，box只能是其中一种，不能兼得。
2. BFC是一个独立的渲染区域，此区域与外部不会互相影响
3. 在BFC中，子元素会一个接着一个垂直放置，垂直方向的距离由margin决定，同属于一个BFC的两个相邻Box的margin会重叠
4. BFC的区域不会与float box重叠
5. 计算BFC高度的时候，浮动元素也参加计算

## 如何产生BFC
- 根元素
- float属性不为none
- position为absolute或fixed
- display为inline-block, table-cell, table-caption, flex, inline-flex
- overflow不为visible

## BFC的应用
1. 清除浮动<br/>
根据BFC的第四条特性，我们可以将浮动元素的父元素触发BFC，这样父元素在计算高度的时候，浮动的子元素高度也会算进去

2. 防止margin重叠<br/>
位于同一个BFC的两个子元素margin会重叠，为了防止两个元素margin重叠，可以在其中一个子元素外再加一层可以触发BFC的父元素，则两个子元素不在同一个BFC中，不会重叠

3. 自适应布局<br/>
由于BFC的区域不会与float box重叠，所以可以使用float和BFC完成自适应布局，BFC元素不需要关注浮动元素的宽度，就可以完成自适应
这种自适应 中间布局完全不需要知道两边的大小，但是不能够保重中间重要的内容优先加载

## 参考

#### W3C对BFC的定义： https://www.w3.org/TR/CSS2/visuren.html#block-formatting
#### http://www.cnblogs.com/lhb25/p/inside-block-formatting-ontext.html
#### BFC 与浮动 http://www.zhangxinxu.com/wordpress/2015/02/css-deep-understand-flow-bfc-column-two-auto-layout/