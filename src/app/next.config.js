const path = require('path');

module.exports = {
    webpack: (config, options) => {
        config.resolve.modules = [
            __dirname,
            ...config.resolve.modules
        ];

        config.node = {
            fs: 'empty'
        };

        config.module.rules.push({
            test: /\.ts(x?)$/,
            enforce: 'pre',
            exclude: ['/node_modules/', '/.next/'],
            use: {
                loader: 'tslint-loader',
                options: {
                    emitErrors: true,
                    failOnHint: true,
                    typeCheck: true,
                    tsConfigFile: './src/app/tsconfig.json'
                }
            }
        });

        return config;
    }
};