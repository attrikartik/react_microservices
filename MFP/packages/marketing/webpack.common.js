module.exports={
    module:{
        rules:[
            {
                test:/\.m?js$/,//.js or .mjs proces by babel,
                exclude:/node_modules/, // exclude node_modules dir
                use:{
                    loader:'babel-loader', // use babel as loader
                    options:['@babel/preset-react','@babe;/preset-env'],
                    plugins:['@babel/plugin-transform-runtime']
                }
            }
        ]
    }
}
/**
 *  rules = specify how to process specific types of files
 *  use   = sepicfies loader and other options
 *  loader = speicifies what should be used to process the matched files(above babel)
 *  options = provides options to loader specified,
 *            @babel/preset-react =  preset for for React JSX syntax 
 *            @babel/preset-env =  preset for handling modern JavaScript features 
 *                                 according to the specified environment
 *  plugins - babel plugin should be used
 *            @babel/plugin-transform-runtime = This plugin helps to avoid duplicating
 *                    helper code across files when using certain features like async/await
 * 
 * presets are pre-configured sets of plugins that define the transformation process for 
 * certain types of JavaScript syntax or features.
 */