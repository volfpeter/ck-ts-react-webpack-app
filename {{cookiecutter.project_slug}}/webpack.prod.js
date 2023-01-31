/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge")
const config = require("./webpack.config.js")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = merge(config, {
    mode: "production",
    devtool: "source-map",
    devServer: {
        client: {
            overlay: {
                warnings: false,
                errors: true,
            },
        },
    },
    // Temporarily turn off name mangling in minifying step because it messes up
    // the identity of components in production mode.
    //
    // Also, extract licensing comments to separate files so we can make the JS files even smaller.
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    mangle: false,
                },
                extractComments: true,
            }),
        ],
    },
})
