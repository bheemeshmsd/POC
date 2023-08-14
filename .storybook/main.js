const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],

  /** Expose public folder to storybook as static */
  staticDirs: ["../public"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  webpackFinal: async (config) => {

    config.module.rules.push({
      test: /\.s(a|c)ss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1, // We always need to apply postcss-loader before css-loader
            modules: {
              auto: /\.module\.scss$/, // true
              localIdentName: "[name]__[local]--[hash:base64:5]",
            },
          },
        },
        {
          loader: "sass-loader",
          options: {
            // sourceMap: true,
            implementation: require("sass"), // dart sass
          },
        },
      ],
    });

    return config;
  },

  docs: {
    autodocs: true
  }
};
