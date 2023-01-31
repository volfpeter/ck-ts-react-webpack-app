/* eslint-disable @typescript-eslint/no-var-requires */
"use strict"

const path = require("path")
const webpack = require("webpack")
const DotenvPlugin = require("dotenv-webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index",
    mode: "development",

    devServer: {
        static: __dirname,
        // Enable compression to make Chrome's audit tool happier
        compress: true,
        // Make sure all requests are served with index.html so client side routing works well.
        historyApiFallback: true,
        client: {
            progress: true,
        },
    },

    output: {
        filename: "./dist/bundle.[contenthash].js",
        devtoolModuleFilenameTemplate: function (info) {
            return "file:///" + encodeURI(info.absoluteResourcePath)
        },
    },

    resolve: {
        //
        alias: {
            "~": path.resolve(__dirname, "src/"),
        },
        // Add .ts and .tsx as resolvable extensions
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],

        // Resolve absolute module references from src/ as well as node_modules/
        modules: [path.join(__dirname, "./src"), "node_modules"],
    },

    module: {
        rules: [
            // Re-process any output .js files via source-map-loader
            {
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: /node_modules/,
                enforce: "pre",
            },

            // Compile localizations to the bundle
            {
                test: /locale/,
                exclude: /node_modules/,
                loader: "@alienfast/i18next-loader",
                options: { relativePathAsNamespace: true },
            },

            // Process .ts and .tsx files via the TypeScript compiler
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    silent: true,
                },
            },

            // Process .css files via the CSS loader
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

    plugins: [
        // Use the webpack's own plugin instead of the CLI option
        new webpack.ProgressPlugin(),

        // Replace process.env occurrences in code with the environment variables from .dotenv
        new DotenvPlugin({
            systemvars: true, // needed for Gitlab CI
        }),

        // Create bundle references in the HTML output automatically
        new HtmlWebpackPlugin({
            template: "src/index.html",
            // Don't inject the budle.js, we will do that in the template to use an absolute path.
            inject: false,
        }),
    ],
}
