const path = require("path");
const autoprefixer = require('autoprefixer');
const entryPath = "";
const entryFile = "app.js";



module.exports = {
    entry: `./${entryPath}/js/${entryFile}`,
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `${entryPath}/build`)
    },
    devServer: {
        contentBase: path.join(__dirname, `${entryPath}`),
        publicPath: "/build/",
        compress: true,
        port: 3001
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    }
};
