const webpack = require("webpack");

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            "process.env.PROJECT_ID": JSON.stringify(process.env.PROJECT_ID),
        }),
    ],
};
