const HtmlWebpackPlugin = require('html-webpack-plugin');

//plugin used to explose modules to container or other projects
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports={
    mode:'development',
    devServer:{
        port:8081,
    },
    plugins:[
        // setup plugin to expose files to host project
        new ModuleFederationPlugin({
            name:'products',
            filename:'remoteEntry.js',
            // expose defines which files or modules to be exposes to other projects
            exposes:{
                './ProductsIndex':'./src/bootstrap'
            },
            // shared:{
            //     faker:{
            //         singleton:true // only one copy of faker required but if in-compatible version then warning will be thrown
            //     }
            // }
            shared:['faker']
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html' // render output of webpack to browser
        })
    ]
}
