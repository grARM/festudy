title: start webpack
speaker: thinkzhan
url: https://github.com/ksky521/nodePPT
transition: slide3
files: /js/demo.js,/css/demo.css,/js/zoom.js,/js/sass.js
theme: moon
usemathjax: yes
[slide]
#start webpack

[slide]
----
>>The most pressing reason for developing another module bundler was Code Splitting and that static assets should fit seamlessly together through modularization.

[slide]

1. module bundler
2. require anything
3. code splitting

[slide]

## module bundler  VS   task runner


[slide]
## module bundler

1. 在线编译

   * seajs和requirejs
2. 预编译

[slide]

 ## require anything
    * js?
    * css scss img
    * ejs vm...

[slide]

## 各种loader

[slide]

```
return "module.exports = " + JSON.stringify("data:" + (mimetype ? mimetype + ";" : "") + "base64," + content.toString("base64"));

```
[slide]

## code splitting
[slide]

####文件太大？

-  多入口
-  common chunk
-  require.ensure

[slide]
```javascript
\\ entry.js

require('a');
require.ensure([], function(require){
    require('b');
}, '');

\\ a.js
console.log('a...');

\\ b.js
console.log('b...');
```
[slide]
* entry
* loader
* plugins
* output

[slide]

1. compile 开始编译
2. make 从入口点分析模块及其依赖的模块，创建这些模块对象
3. build-module 构建模块
4. after-compile 完成构建
5. seal 封装构建结果
6. emit 把各个chunk输出到结果文件
7. after-emit 完成输出

[slide]
 # end
