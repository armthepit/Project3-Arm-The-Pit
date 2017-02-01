const path = require('path');

module.exports = {
    entry: "./client/index.js",
    output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                // include: /client/,
                include: [
                    path.join(__dirname, 'client'),
                    path.join(__dirname, 'server/shared')
                ],
                loader: "babel",
                query: {
                    presets: [
                        "react", "es2015", "stage-0"
                    ],
                    plugins: ["transform-decorators-legacy"]
                }
            }, {
                test: /\.css$/,
                loaders: ['style', 'css']
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                  'file?hash=sha512&digest=hex&name=[hash].[ext]',
                  'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
            }

        ]
    },
    //   module: {
    //   loaders: [{
    //     test: /\.css$/,
    //     loaders: [
    //       'style', 'css'
    //     ]
    //   }]
    // },
    // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
    // Without this the console says all errors are coming from just coming from bundle.js
    devtool: "eval-source-map"
};
