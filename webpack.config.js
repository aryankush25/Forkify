const path = require('path')

module.exports = {
    entry: './src/js/index.js',
    output: {
<<<<<<< HEAD
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
=======
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
>>>>>>> a34301828e77147e9499903013e8235761341be7
    }
};