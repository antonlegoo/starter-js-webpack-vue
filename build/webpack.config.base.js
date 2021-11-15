var path = require( "path" );
var webpack = require( "webpack" );
var HtmlWebpackPlugin = require('html-webpack-plugin');


var config = require( "./config.js" );
const { VueLoaderPlugin } = require('vue-loader')

// ********************************************************
//
// ********************************************************

module.exports =
{
    entry: 
    [
        path.resolve(__dirname, "./entry.js" )
    ],
    output:
    {
        path: config.build.OUTPUT_DIR,
        filename: "js/bundle.js",
    },
    module:
    {
        rules:
        [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            {
                test: /\.css$/, 
                use: ['style-loader','css-loader','sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|pdf|mp4|mov)(\?.*)?$/,
                use : [
                    {
                        loader: 'url-loader',
                        options:
                        {
                            limit: 1,
                            name: (filename) => ( filename.indexOf("static_files") > -1 ) ? "files/[name].[ext]" : "images/[name].[ext]",
                        }
                    },
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options:
                {
                    limit: 10000,
                    name: "fonts/[name].[ext]"
                }
            },
            {
                test: /\.vue?$/,
                loader: 'vue-loader',
            },
        ],
    },
    resolve:
    {
        modules: ["node_modules"],
        alias : 
        {
            vue: 'vue/dist/vue.esm-bundler.js',
            "@root": path.resolve( __dirname, "../" ),
            "@app": path.resolve( __dirname, "../src/app/" ),
            "@pages": path.resolve( __dirname, "../src/app/pages/" ),
            "@shared": path.resolve( __dirname, "../src/app/shared/" ),
            "@styles" : path.resolve( __dirname, "../src/assets/scss/" ),
            "@images" : path.resolve( __dirname, "../src/assets/img/" ),
        }
    },
    plugins:
    [
        new HtmlWebpackPlugin(
        {
            title: 'App',
            filename: './index.html',
            template: 'src/index.html'
        }),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
          __VUE_OPTIONS_API__: true,
          __VUE_PROD_DEVTOOLS__: false
        }),
    ]
};