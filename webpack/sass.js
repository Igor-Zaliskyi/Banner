module.exports = function(paths) {
    return {
        module: {
            rules: [{
                test: /\.(scss|css)$/,
                include: paths,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings 
                }, {
                    loader: "css-loader" // translates CSS into CommonJS 
                }, {
                    loader: "sass-loader" // compiles Sass to CSS 
                }]
            }]
        },
    };
};

