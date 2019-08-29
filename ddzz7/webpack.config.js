module: {
    rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.styl/,
            use: [
                'style-loader',
                'css-loader',
                'stylus-loader'
            ]
        },
        {
            test: /\.(gif|jpg|jpeg|png|svg|)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: '[name]-aaa.[ext]'
                }
            }]
        }
    ]
}