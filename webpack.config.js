const path = require('path');


const PATHS = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
    // pages: path.resolve(__dirname, 'src/views/pages'),
};

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    mode: 'development',
    context: PATHS.src,
    entry: {
        app: './js/main.js',
    },
    output: {
        path: PATHS.dist,
        filename: './js/' + filename('js'),
        publicPath: '',
    }
};