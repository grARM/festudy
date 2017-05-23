# 圣杯布局
1. 圣杯布局的来源<br/>
https://alistapart.com/article/holygrail<br/>
2. 圣杯布局的实现手段<br/>
①负边距：一种不脱离文档流，改变文档位置的方法<br/>
<img src="http://i4.buimg.com/588926/db6d2a2ec32b9549.png" style="width: 400px"><br/>
当一个static元素在top/left使用负边距时，它把元素向这个特定的方向拉，但是当bottom/right设置负边距时，它并不会把元素向下或右拉，相反，它会把后面的元素往里面拉，从而覆盖自己。<br/>
与position： relative的区别：会影响后续文档流<br/>
②margin-left:-100%; 与 margin-left:-200px;
已知文档流若满一行，则会在下一行显示，而使用margin-left:负值可以将文档流中下一行的元素提前到上一行，以下分别是margin-left: -200px , -800px, -1424px（父元素container的宽度）的展现效果<br/>
<img src="http://i4.buimg.com/588926/e0069af0a833e72b.png" style="width: 400px"><br/>
<img src="http://i4.buimg.com/588926/e916ce43ee06f539.png" style="width: 400px"><br/>
<img src="http://i4.buimg.com/588926/6ecf92ab187d67b5.png" style="width: 400px"><br/>
当margin-left的负值与父元素container一样大的时候，子元素正好在父元素的最左侧
所以使用margin-left: -100%可保证子元素永远位于父元素的最左侧<br/>
由于左边栏设置了margin-left: -100%，左边栏已经改写了文档流，当前的右边栏应该位于原来左边栏所处的位置<br/>
<img src="http://i1.piimg.com/588926/60a0363bd0c8921d.png" style="width: 400px"><br/>
使用marign-left: -200px正好可以将右边栏放到最右边
③为防止当前的左右栏压住中间的内容区域，为中间内容区域设置padding，左右边栏使用position:relative的方法左右移动
3. 圣杯布局的优点<br/>
①中间内容优先加载：文档流按照HTML从上到下的方式顺序加载，位于最靠前的中间区域优先加载，保证了重要的内容先被用户看到<br/>
②代码简单，兼容性强<br/>
4. 圣杯布局的进化----双飞翼布局<br/>
在middle 内部加一个div，设置margin,就可以防止当前左右栏压住中间的内容区，简化了圣杯布局实现手段的第三步<br/>
改进点：<br/>
①由于圣杯布局采用了相对定位，对以后的内部构建可能会有所影响。<br/>
②核心功能不变，代码更加简洁<br/>
③在缩小到足够小时，圣杯布局会将左右栏挤到下面，但是双飞翼布局不会<br/>
<img src="http://ww2.sinaimg.cn/large/006HJ39wgy1ffvfu8560gj30u80tmadb.jpg" style="width: 400px"/>

## 参考

#### 圣杯布局： http://www.jianshu.com/p/f9bcddb0e8b4
#### 负边距： http://www.daqianduan.com/6239.html
#### 负边距的应用：http://www.cnblogs.com/2050/archive/2012/08/13/2636467.html#2457812
#### 双飞翼布局： http://www.cnblogs.com/tinyphp/p/4743674.html