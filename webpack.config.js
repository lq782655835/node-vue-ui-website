var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Autoprefixer = require('autoprefixer')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
    entry: {
        index: './src/index/index.js',
        main: './src/main/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            sourceMap: true,
                            resources: [path.resolve(__dirname, './src/assets/scss/var.scss')]
                        }
                    }
                ]
            },
            {
                test: /\.sass$/,
                use: ['vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: '[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.md$/,
                loader: 'vue-loader!@vusion/md-vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, 'src')
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        hot: true,
        inline: true,
        open: true,
        host: 'localhost',
        port: 8080
        // proxy: {
        //   '/api': 'http://localhost:3001',
        // //   changeOrigin: true,
        // //   secure: false,
        // }
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({ filename: 'index.html', hash: true, template: './src/index/index.html', chunks: ['index'] }),
        new HtmlWebpackPlugin({ filename: 'main.html', hash: true, template: './src/main/index.html', chunks: ['main'] }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './static'),
                to: 'static',
                ignore: ['.*']
            }
        ])
    ]
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //   sourceMap: true,
        //   compress: {
        //     warnings: false
        //   }
        // }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        Autoprefixer
    ])
}
