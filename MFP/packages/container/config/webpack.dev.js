const  {merge} = require('webpack-merge')
// merge is func used to merge multiple webpack config files

const HtmlWebpackPlugin = require('html-webpack-plugin')

// plugin to consume remote files from sub app
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common')

// pkg.json file
const packageJson = require('../package.json')

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
        }),
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                // keys will be match with import statements to fetch data from URL
                marketingApp:'marketing@http://localhost:8081/remoteEntry.js',
            },
            shared:['react','react-dom']
            
            // using below approach allows wbepack to manage dependicies we dont have to   update the shared array again and again
            // shared : packageJson.dependencies
        })
    ]
}

module.exports= merge(commonConfig,devConfig)
