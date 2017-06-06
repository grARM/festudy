title: webpack入门体会
speaker: ruiguo
url: https://github.com/grARM/festudy/blob/master/feAdvanced/webpackStartPPT/README.md
transition: move

theme: moon

[slide]

#  webpack入门体会
## 简述webpack基本使用方法
<small>演讲者：郭瑞</small>

[slide]

# webpack是干什么的

* 打包？
* 部署中资源的映射
* 小尺寸的资源内联
* 发布新版本的缓存带时间戳
* 代码分割
* 解决的问题就很复杂

[slide]

# 还有什么

* Browserify 
* rollup
* requireJS
* seaJS

[slide]

# 为什么要学webpack

* 跑在浏览器上
* 打包？还是预编译场景
* webpack  != require + gulp  

[slide]

# 组成部分
* 返回一个config对象
* entry / output  注意：单/多入口；string、array、object
* loader
* plugin
* module


[slide]

# 常用的功能
* js 模块化、外部依赖、代码分割
* es6 预处理
* css 预处理
* html生成
* 热替换
* css导出
* Source Maps

[slide]

# webpack in vue
* require('webpack')
* webpack-merge
* return就好

[slide]

# 小技巧
* -p
* -w
* UglifyJsPlugin



