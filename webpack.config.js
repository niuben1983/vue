require('require-yaml');

var webpack = require('webpack');

var path = require('path');
module.exports = {
    entry: {
        'share/index': './share/index',
        vendor: ['vue', 'vue-router', 'vue-resource']
    },
    output: {
        path: path.join(__dirname, './dist/'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true,
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: [/node_modules/] },
            { test: /\.css$/, loader: 'style!css!autoprefixer'},
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
        ]
    },
    vue: {
        loaders: {
            css: 'style!css!autoprefixer',
        }
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            //'vue': __dirname + '/share/lib/vue/vue.js',
            //'vue-router': __dirname + '/share/lib/vue/vue-router.js',
            //'vue-resource': __dirname + '/share/lib/vue/vue-resource.js',
            'components': path.join(__dirname, '/share/src/components')
        }
    },
    plugins: [

        new webpack.optimize.CommonsChunkPlugin(
            /* chunkName= */"vendor",
            /* filename= */"share/vendor.bundle.js"
        ),

        new webpack.DefinePlugin({
            CONFIG: JSON.stringify( require('./config/dev') )
        }),

    ],

    devtool: 'source-map'
};