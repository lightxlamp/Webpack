const path = require('path');

// This JS file compiles during building process (nodeJS)
// So module export, require also awaliable here 
// https://webpack.js.org/configuration/ 

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js', 
        path: path.resolve(__dirname, 'dist')
    }
}