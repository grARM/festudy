# 圣杯布局
1. 圣杯布局使用场景
    - 三列布局，中间宽度自适应，两边定宽
    - 中间栏要在浏览器中优先展示渲染
    - 允许任意列的高度最高
    - 要求用最简单的CSS、最少的HACK语句
![image](picture url)http://static.oschina.net/uploads/space/2015/0116/140756_l6Hn_59889.png
2. 圣杯布局写法
``` html
<div class="container">
    <div class="main">Main</div>
    <div class="left">Left</div>
    <div class="right">Right</div>
</div>
```
``` css
<style>
    .container{
        padding-left:150px; // 2.main左侧空出距离
        padding-right:190px; // 2.main右侧空出距离
    }
    .main{
        width: 100%;
        float: left;
        background-color: grey;
    }
    .left{
        position: relative;
        left: -150px; // 3.移动到左侧空白
        margin-left: -100%; // 1.上到覆盖main左侧
        width: 150px;
        float: left;
        background-color: blue;
    }
    .right{
        position: relative;
        right: -200px; // 3.移动到右侧空白
        margin-left: -200px; // 1.上到覆盖main右侧
        width: 200px;
        float: left;
        background-color: red;
    }
</style>
```
3. 双飞翼布局
``` html
<div class="container">
    <div class="main">Main</div>
</div>
<div class="left">Left</div>
<div class="right">Right</div>
```
``` css
<style>
    .container{
        width:100%;
        float:left;
    }
    .main{
        margin-left: 150px; // 2.main左侧空出距离
        margin-right: 200px; // 2.main右侧空出距离
    }
    .left{
        margin-left: -100%; // 1.上到覆盖main左侧
        width: 150px;
        float: left;
        background-color: blue;
    }
    .right{
        margin-left: -200px; // 1.上到覆盖main右侧
        width: 200px;
        float: left;
        background-color: red;
    }
</style>
``` css
4. 原理
负边距作用：
    - 在普通文档流中向左和向上偏移，且放弃偏移前占据的空间
    - 增加元素宽度
    - ***向左或向右移动浮动元素***