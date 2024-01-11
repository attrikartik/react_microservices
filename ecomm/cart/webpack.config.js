const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports={
    mode:'development',
    devServer:{
        port:8082
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'cart',
            filename:'remoteEntry.js',
            exposes:{
                './CartShow':'./src/bootstrap.js'
            },
            // shared:{
            //     faker:{
            //         singleton:true // only one copy of faker required but if in-compatible version then warning will be thrown
            //     }
            // }
            shared:['faker']
        }),
        new HTMLWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}