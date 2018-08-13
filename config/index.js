'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
    build: { // production 环境
        // 使用 config/prod.env.js 中定义的编译环境
        env: require('./dev.env'),
        // 编译输入的 index.html 文件
        index: path.resolve(__dirname, '../dist/index.html'),
        // 编译输出的静态资源路径
        assetsRoot: path.resolve(__dirname, '../dist'),
        // 编译输出的二级目录
        assetsSubDirectory: 'static',
        // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
        assetsPublicPath: './',
        // 是否开启 cssSourceMap
        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        // 是否开启 gzip
        productionGzip: false,
        // 需要使用 gzip 压缩的文件扩展名
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'), // 使用 config/prod.env.js 中定义的编译环境
        // Paths
        assetsSubDirectory: 'static',
        // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
        assetsPublicPath: '/',
        proxyTable: {},

        // Various Dev Server settings
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 1521, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: true, // 是否自动打开网页
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,
        cssSourceMap: true,
        // 需要 proxyTable 代理的接口（可跨域）
        proxyTable: {
            '/apiX': {
                target: 'https://www.easy-mock.com',
                //secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true,
                pathRewrite: {
                    '^/apiX': '' //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
                }
            }
        },
    }
}