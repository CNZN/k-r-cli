const path = require ('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// const HappyPack = require('happypack');

module.exports = () => {
    const config = merge.merge([common, {
        mode: 'development',
        plugins: [
            // new webpack.HotModuleReplacementPlugin(),
            
            //该插件将为你生成一个HTML5文件，其中包括使用script标签的body中的所有webpack包
            //安装npm install --save-dev html-webpack-plugin
            new HtmlWebPackPlugin({
                title: 'index',//用于生成的HTML文档的标题
                template: './public/index.html'//默认index.html位置
            })
        ],
        devServer: {
            //告诉服务器从哪个目录中提供内容。只有在你想要提供静态文件时才需要
            contentBase: path.resolve(__dirname, "dist"),
            compress:true, //是否压缩
            port:8080, //端口号
            host:'localhost', //外部服务器可以访问
            open:true, //是否运行时打开浏览器
            historyApiFallback:true,
                // 本地代理的端口号
                proxy: {
                    '/api': {
                        target: 'http://localhost:8888/',
                        changeOrigin: true
                    }
                }
        }
    }]);
    return config;
}