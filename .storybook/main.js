const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register',
  ],
  webpackFinal: async (config, { configType }) => {
    // https://storybook.js.org/docs/configurations/custom-webpack-config/
    config.module.rules.push({
      test: /\.(png|svg)$/i,
      use: 'file-loader',
      exclude: /node_modules/,
    });
    config.module.rules.push({
      test: /\.scss$/,
      // https://github.com/storybookjs/storybook/issues/4802#issuecomment-446233703
      sideEffects: true,
      loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    // https://github.com/storybookjs/storybook/issues/5708
    config.module.rules = config.module.rules.map(data => {
      if (/svg\|/.test(String(data.test))) {
        data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
      }
      return data;
    });

    return config;
  },
};
