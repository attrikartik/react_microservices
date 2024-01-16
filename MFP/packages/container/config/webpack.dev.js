const  {merge} = require('webpack-merge')
// merge is func used to merge multiple webpack config files

const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')

const devConfig = {
    mode:'development',
    devServer:{
        port:8080,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'public/index.html'
        })
    ]
}

module.exports= merge(commonConfig,devConfig)
