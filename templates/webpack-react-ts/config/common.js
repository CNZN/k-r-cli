const path = require('path');
const PROJECT_PATH = path.join(__dirname, '../');
const SOURCE_PATH = path.join(PROJECT_PATH, './src')

module.exports = {
    devtool: 'source-map',
    entry: path.join(__dirname, '../src/index'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module :{
        rules: [
            //ts-loader 用来解析ts文件
            //需要安装以下依赖
            //npm install ts-loader --save-dev
            //npm install typescript --save-dev
            //安装react相关依赖
            //npm install --save-dev react react-dom @types/react @types/react-dom
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            // 加载png、json
            // 安装npm install --save-dev file-loader
            {
                test: /\.[(png)|(obj)|(json)]$/,
                loader: 'file-loader'
            },
            // 加载css
            //安装npm install --save-dev css-loader
            //npm install style-loader --save-dev
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader']
            },
        ]
    },
    // 设置如何被解析
    resolve: {
        mainFiles: ['index'],
        //下面后缀的文件导入时可以省略文件名，js必须要有，否则会react.js文件会无法被解析
        extensions: [".ts", ".tsx", ".js"],
        // 改import，require设置别名
        alias:{
            '@': SOURCE_PATH
        }
    }
}