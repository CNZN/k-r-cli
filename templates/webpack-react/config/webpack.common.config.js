const path = require ('path');
const PROJECT_PATH = path.join(__dirname, '../');
const SOURCE_PATH = path.join(PROJECT_PATH, './src')
const HappyPack = require('happypack');

module.exports = {
    devtool : 'cheap-module-eval-source-map',
    entry: {
        index: './src/index.js',
        framework: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename : '[name].bundle.js'
    },
    resolve: {
        mainFiles: ['index'],
        extensions: ['.js', '.jsx'],
        alias: {
            '@': SOURCE_PATH
        }
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/, // 匹配.js文件
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env', 
                            '@babel/preset-react',
                        ],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
                // use: 'happypack/loader?id=styles'
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader']
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        limit: 8192
                    }
                }
            },
            {
                test: /\.(eot|ttf|svg|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'font/'
                    }
                }
            }
        ]
    },
    // plugins: [
    //     new HappyPack({
    //         id: 'styles',
    //         loaders: [ 'style-loader', 'css-loader', 'less-loader' ]
    //     })
    // ],
}