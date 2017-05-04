# 使用gulp指令开始进行jslint检查
## tips
* 1.在生成.gitignore 文件时，参考以下的博文，使用touch<br>
http://blog.csdn.net/weixin_36401046/article/details/52954408<br>
该文件是个隐藏文件，在文件夹中不可见

* 2.初次创建的时候，未指定项目入口文件，导致无法正确找文件位置



# 建议：
## 201705041114
* 1、不建议将功能直接封装到default任务下。以后扩展不是很方便，default尽量只作为大入口。
* 2、要检查的文件，建议放在另外的json（配置文件）文件中，在gulpfile中require进来，在配置文件中要体现出，已经查过了那些，当前检查哪些。

