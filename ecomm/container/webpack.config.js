const HtmlWebpackPlugin = require('html-webpack-plugin');

//plugin used to fetch  modules to container or other projects from remote project
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports={
    mode:'development',
    devServer:{
        port:8080,
    },
    plugins:[
        // setup plugin to fetch files to host project from remote project
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                // keys will be match with import statements to fetch data from URL
                productsApp:'products@http://localhost:8081/remoteEntry.js',
                cartApp:'cart@http://localhost:8082/remoteEntry.js'
            }
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}
