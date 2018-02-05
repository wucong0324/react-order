let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let OpenBrowserPlugin = require('open-browser-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, 'app/index.js'),
    output: {
        // path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        // publicPath: "/assets/"
    },
    resolve: {
        extensions: [".js", ".json", '.jsx']  //自动解析确定的扩展
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/,  use: ['babel-loader'] },
            { test: /\.css$/,  use: ['style-loader','css-loader?modules','postcss-loader'] },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader?modules', 'less-loader','postcss-loader']
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000, // 限制大小小于10k
                }
            },
            {
                test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000, // 限制大小小于10k
                    name: 'static/media/[name].[hash:8].[ext]',
                }
            }
        ]
    },
    plugins: [
        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.html'
        }),

        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // 打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ],
    devServer: {
        proxy: {
            // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3030 上，由 koa 提供 mock 数据。
            '/api': {
                target: 'http://localhost:3030',
                secure: false
            }
        },
        historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //实时刷新
        hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    }
}