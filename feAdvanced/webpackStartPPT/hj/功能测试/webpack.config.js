var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',// 生成source-map
    entry:  [__dirname + "/app/main.js", __dirname + "/app/main1.js"],
/*    entry: {
        pageOne: __dirname + "/app/main.js",
        pageTwo: __dirname + "/app/main1.js"
    },*/
    output: {
        path: __dirname + "/build",//打包后的文件存放的地方
        filename: "[name].js"//打包后输出文件的文件名
    },
    //安装可以装换JSON的loader
    //npm install --save-dev json-loader
    module: {//在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                // Babel其实是几个模块化的包
                // npm install --save-dev babel-core babel-loader babel-preset-es2015
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'//在webpack的module部分的loaders里进行配置即可
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'//添加对样式表的处理
            }
        ]
    },
    // 浏览器监测你的代码的修改，并自动刷新修改后的结果,需要安装依赖npm install --save-dev webpack-dev-server
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    plugins: [
        new webpack.BannerPlugin("这是第一版本"),//在这个数组中new一个就可以了
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.UglifyJsPlugin(),
    ],
}