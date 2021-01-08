const Setting = require('./src/project.config.env');
const webpack = require('webpack')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

// 拼接路径
const resolve = dir => require('path').join(__dirname, dir);

// 增加环境变量
// version
process.env.VUE_APP_VERSION = require('./package.json').version;
// 打包时间
process.env.VUE_APP_BUILD_TIME = require('dayjs')().format('YYYY-M-D HH:mm:ss');


let hardSourcePlugin = new HardSourceWebpackPlugin({
    // Either an absolute path or relative to webpack's options.context.
    cacheDirectory: resolve('./node_modules/.cache/hard-source/[confighash]'),
    // Either a string of object hash function given a webpack config.
    configHash: function (webpackConfig) {
        // node-object-hash on npm can be used to build this.
        return require('node-object-hash')({ sort: false }).hash(webpackConfig)
    },
    // Either false, a string, an object, or a project hashing function.
    environmentHash: {
        root: process.cwd(),
        directories: [],
        files: ['package-lock.json', 'yarn.lock']
    },
    // An object.
    info: {
        // 'none' or 'test'.
        mode: 'none',
        // 'debug', 'log', 'info', 'warn', or 'error'.
        level: 'debug'
    },
    // Clean up large, old caches automatically.
    cachePrune: {
        // Caches younger than `maxAge` are not considered for deletion. They must
        // be at least this (default: 2 days) old in milliseconds.
        maxAge: 2 * 24 * 60 * 60 * 1000,
        // All caches together must be larger than `sizeThreshold` before any
        // caches will be deleted. Together they must be at least this
        // (default: 50 MB) big in bytes.
        sizeThreshold: 50 * 1024 * 1024
    }
})

module.exports = {
    publicPath: Setting.publicPath,
    lintOnSave: Setting.lintOnSave,
    outputDir: Setting.outputDir,
    assetsDir: Setting.assetsDir,
    runtimeCompiler: true,
    productionSourceMap: false,
    devServer: {
        publicPath: Setting.publicPath
    },
    css: {
        loaderOptions: {
            less: {

            }
        }
    },
    // 默认设置: https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-service/lib/config/base.js
    chainWebpack: config => {
        /**
         * 删除懒加载模块的 prefetch preload，降低带宽压力
         * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
         * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
         * 而且预渲染时生成的 prefetch 标签是 modern 版本的，低版本浏览器是不需要的
         */
        config.plugins
            .delete('prefetch')
            .delete('preload');
        // 解决 cli3 热更新失效 https://github.com/vuejs/vue-cli/issues/1559
        config.resolve
            .symlinks(true);
        config
            // 开发环境
            .when(process.env.NODE_ENV === 'development',
                // sourcemap不包含列信息
                config => config.devtool('cheap-source-map')
            )
            // 非开发环境
            .when(process.env.NODE_ENV !== 'development', config => {

            });

        // svg
        config.module.rule('svg')
            .exclude.add(resolve('src/assets/icons'))

        config.module.rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icons')).end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({ symbolId: 'icon-[name]' })






        // images exclude
        config.module.rule('images')
            .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
            .exclude.add(resolve('src/assets/svg')).end()
            .exclude.add(resolve('src/assets/icons')).end()

        // // 重新设置 alias
        config.resolve.alias
            .set('@api', resolve('src/api'))
            .set('@page', resolve('src/pages'));
        // // node
        // config.node
        //     .set('__dirname', true)
        //     .set('__filename', true);
        // // 判断是否需要加入模拟数据
        // const entry = config.entry('app');
        // if (Setting.isMock) {
        //     entry
        //         .add('@/mock')
        //         .end()
        // }
    }
};
