const path = require('path');
// https://webpack.js.org/plugins/html-webpack-plugin/#root
const HtmlWebpackPlugin = require('html-webpack-plugin'); // using capital letter because it is class :) ...
// https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
// taking class from object
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // to clean dist folder from generated JS-hashed files

// This JS file compiles during building process (nodeJS)
// So module export, require also awaliable here 
// https://webpack.js.org/configuration/ 

// We can have several entry points. For example, "analytics" file is not presented in bundle. 
// So we should add it manually to entry point

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        //main: './src/app.js',
        main: './app.js', // no need to write "src" anymore. Because we added context "folder"
        //analytics: './src/analytics.js'
        analytics: './analytics.js'
    },
    output: {
        //filename: '[name].bundle.js', // name is a Webpack pattern. It takes 'main' and 'analytics' in my case 
        filename: '[name].[contenthash].js', // name is a Webpack pattern. It takes 'main' and 'analytics' in my case 
        path: path.resolve(__dirname, 'dist')
    },
    // creates Index.html file with correct "hash" parameters for generated scripts. Analytics.js and main.js. Awesome!
    plugins: [
        new HtmlWebpackPlugin({
            // title: "Webpack 2020 - Great Course", // Overwritten by title in template 
            //template: './src/index.html'
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [{
            test: /\.css$/, //When Webpack see .css use loader listed below
            use: ['style-loader', 'css-loader'] // Webpack acts from right to left. It uses css-loader-first
                // style-loader - Inject CSS into the DOM. - https://github.com/webpack-contrib/style-loader
                // It's recommended to combine style-loader with the css-loader :p
        }]
    }
}