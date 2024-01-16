const  {merge} = require('webpack-merge')
// merge is func used to merge multiple webpack config files

const HtmlWebpackPlugin = require('html-webpack-plugin')

//plugin used to explose modules to container or other projects
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common')

const packageJson = require('../package.json')
const devConfig = {
    mode:'development',
    devServer:{
        port:8081,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'public/index.html'
        }),
        new ModuleFederationPlugin({
            name:'marketing',
            filename:'remoteEntry.js',
            exposes:{
                './Marketing':'./src/bootstrap'
            },
            shared:['react','react-dom']
            // using below approach allows wbepack to manage dependicies we dont have to   update the shared array again and again
            // shared : packageJson.dependencies
        })
    ]
}

module.exports= merge(commonConfig,devConfig)
