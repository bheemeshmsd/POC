# POC

**To set up the project locally follow the given instruction**

```
  git clone https://github.com/bheemeshmsd/POC.git
  cd POC
  npm i
  npm run start
```

**To run storybook**

```
  npm run storybook
```

**To run react test**

```
  npm run test
```

**Package Used and it's use case in the project**

@babel/cli, @babel/core, @babel/preset-env, @babel/preset-react: These Babel packages are used to transpile modern JavaScript (including JSX) to a version of JavaScript that can be understood by older browsers.

@storybook/addon-actions, @storybook/addon-essentials, @storybook/addon-interactions, @storybook/addon-links, @storybook/addon-onboarding, @storybook/blocks, @storybook/react, @storybook/react-webpack5: These packages are related to Storybook, a tool for developing UI components in isolation. These addons and tools help with actions, interactions, links, documentation, and other UI component-related features.

@testing-library/jest-dom, @testing-library/react, @testing-library/user-event, react-testing-library: Testing library packages that provide utilities and tools for testing React components. They encourage writing tests that simulate user interactions and check for expected behaviors.

babel-eslint, babel-jest, babel-loader: Babel-related packages for transpilation and parsing JavaScript code in testing and build processes.

css-loader, style-loader, sass-loader: Webpack loaders for handling CSS and Sass styles in your application.

eslint, eslint-config-airbnb, eslint-config-prettier, eslint-plugin-import, eslint-plugin-jsx-a11y, eslint-plugin-prettier, eslint-plugin-react, eslint-plugin-react-hooks: ESLint and related plugins to ensure code consistency and best practices. They help catch errors and enforce coding standards.

file-loader, url-loader: Webpack loaders to handle various file types (like images, fonts) and convert them into URL paths.
html-webpack-plugin: A Webpack plugin to generate an HTML file that includes all necessary assets, like scripts and styles, automatically.

jest, jest-environment-jsdom, jest-transform-stub: Testing framework, environment, and transform for Jest. Jest is commonly used for unit testing in JavaScript applications.

prettier: Code formatter that helps maintain consistent code style across your project.

react, react-dom: Core libraries for building user interfaces with React.

@reduxjs/toolkit, react-redux, redux: Packages related to state management with Redux, which helps manage the application's global state.

node-sass, sass, sass-loader: Packages for handling Sass (CSS preprocessor) styles.

prop-types: A runtime type checking for React props to help catch bugs early.

uuid: Package for generating universally unique identifiers (UUIDs), which can be useful for creating unique keys for React components.

webpack, webpack-cli, webpack-dev-server: Packages for bundling and serving JavaScript modules and other assets.

eslint-webpack-plugin: A plugin that integrates ESLint with Webpack to check your code as part of the build process.

