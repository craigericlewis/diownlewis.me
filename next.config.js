// next.config.js
const withPreact = require("next-plugin-preact");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = withPreact({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new CopyWebpackPlugin(
      {
        patterns: [
          {
            from: 'node_modules/pdfjs-dist/cmaps/',
            to: 'cmaps/'
          },
        ],
      })
    );
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|pdf)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    });
    return config;
  },
});
