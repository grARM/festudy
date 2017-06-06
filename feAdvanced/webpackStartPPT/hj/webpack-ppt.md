title: webpack
speaker: hejun
url: https://github.com/ksky521/nodePPT
transition: cards
theme: green
files: /js/demo.js,/css/demo.css

[slide style="background-image:url('/img/image.png')"]

# webpack
## 演讲者：hejun

[slide]

## 为什么使用webpack
## 什么是webpack
## webpack的特点

[slide]
# webpack 四个核心概念 {:&.flexbox.vleft}
## 入口entry
## 输出output
## Loader
## 插件plugins

[slide]

# 入口 entry {:&.flexbox.vleft}
## 单个入口
- string类型
- 数组类型

## 多个入口
- 对象类型（多个独立的依赖图表）
[slide]

# 输出output {:&.flexbox.vleft}
## path
## filename
- 单个入口
- 多个入口： [name]

[slide]
# loader {:&.flexbox.vleft}
## 作用：anything to js
## 特点：支持链式传递
## 用法：串联，参数
## 实例
- Babel
- babel-core, babel-loader babel-preset-es2015
- .babelrc
- Less-loader, css-loader, style-loader
[slide]
# Plugins {:&.flexbox.vleft}
## 作用：
## 用法：new
## 常用清单
- ProvidePlugin：提供类似jQuery的$全局变量
- CommonsChunkPlugin：从根本上允许我们从不同的 bundle 中提取所有的公共模块，并且将他们加入公共 bundle 中
- ExtractTextPlugin：将CSS生产独立文件，不做内联
- UglifyJsPlugin：压缩JS
- HtmlWebpackPlugin：创建html文件，配合ExtractTextPlugin可以加入打包后的js和css
[slide]
# 其他常用项 {:&.flexbox.vleft}
## devtool
- 开发环境 && 生产环境
- source-map, cheap-module-source-map, eval-source-map , cheap-module-eval-source-map

## devServer
- webpack-dev-server

## watch & watchOptions
## resolve
- alias, extensions

## externals
[slide]
# 参考文献 {:&.flexbox.vleft}
  - http://www.thkdog.com/html5/2015/05/08/webpack.html
  - http://www.barretlee.com/blog/2017/04/27/gulp-and-webpack/
  - http://www.jianshu.com/p/42e11515c10f
  - http://www.jianshu.com/p/dcb28b582318
  - https://segmentfault.com/a/1190000004172052#articleHeader0 
  - https://segmentfault.com/a/1190000007568507#articleHeader13（webpack 1.0 中文文档翻译）
