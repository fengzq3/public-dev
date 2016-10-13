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
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        drop_console:true,
        //        warnings: false
        //    }
        //}),
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