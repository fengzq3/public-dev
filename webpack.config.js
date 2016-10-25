/**
 * Created by FengZQ on 2016/10/09.
 * webpack config file
 */
"use strict";
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //提取公共lib
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'commons', filename: 'common.js'}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console:true,
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new htmlWebpackPlugin({
            files: {
                js: ['asset/js/common.js', 'asset/js/index.bundle.js']
            },
            title: "招标",
            template: 'src/index.html',
            filename: '../../index.html'

        }),
        new htmlWebpackPlugin({
            files: {
                js: ['asset/js/common.js', 'asset/js/index.bundle.js']
            },
            title: "关于我们",
            template: 'src/about.html',
            filename: '../../about.html'

        }),
        new htmlWebpackPlugin({
            files: {
                js: ['asset/js/common.js', 'asset/js/index.bundle.js']
            },
            title: "列表1",
            template: 'src/list/list.html',
            filename: '../../list/list.html'

        }),
        new htmlWebpackPlugin({
            files: {
                js: ['asset/js/common.js', 'asset/js/index.bundle.js']
            },
            title: "列表2",
            template: 'src/list/list2.html',
            filename: '../../list/list2.html'

        }),
        new htmlWebpackPlugin({
            files: {
                js: ['asset/js/common.js', 'asset/js/index.bundle.js']
            },
            title: "内容页",
            template: 'src/content/content.html',
            filename: '../../content/content.html'

        }),
        new htmlWebpackPlugin({
            files: {
                js: ['asset/js/common.js', 'asset/js/index.bundle.js']
            },
            title: "登录页",
            template: 'src/other/login.html',
            filename: '../../other/login.html'

        }),
        new htmlWebpackPlugin({
            files: {
                js: ['asset/js/common.js', 'asset/js/index.bundle.js']
            },
            title: "注册",
            template: 'src/other/register.html',
            filename: '../../other/register.html'

        }),
        new htmlWebpackPlugin({
            files: {
                js: ['asset/js/common.js', 'asset/js/index.bundle.js']
            },
            title: "高级搜索",
            template: 'src/other/search.html',
            filename: '../../other/search.html'

        }),
        new htmlWebpackPlugin({
            files: {
                js: ['asset/js/common.js', 'asset/js/index.bundle.js']
            },
            title: "展会信息",
            template: 'src/other/info.html',
            filename: '../../other/info.html'

        })

    ],
    //页面入口
    entry: {
        commons: ['jquery', './src/asset/js/bootstrap'],
        index: './src/asset/js/index.js'
    },
    //输出配置
    output: {
        path: './build/asset/js',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    compact: false
                }
            }
        ]
    }

};