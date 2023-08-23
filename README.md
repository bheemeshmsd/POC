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

**Project Process**

The entier project is been set up from scratch by taking advantage of webpack bundler and bable compiler to server the files to the browser. For the development process I have used tools like storybook and react test library to make the development process more steam line.

The main components of the project is the [ListComponent](https://github.com/bheemeshmsd/POC/tree/main/src/components/list-component) and the [ListItem](https://github.com/bheemeshmsd/POC/tree/main/src/components/list-item) . The ListItem is used as a child component inside the ListComponent to which the data is served through redux and persisted through the local storage. The local storage is emphasized through a [customHook](https://github.com/bheemeshmsd/POC/blob/main/src/hook/useLocalStorage.js).



**Package Used and it's use case in the project**

Babel Packages (e.g., @babel/core, @babel/preset-env, @babel/preset-react): Babel is used to transpile modern JavaScript code, including JSX (JavaScript XML), into browser-compatible code. This is important because browsers might not support the latest JavaScript features. Babel allows you to write code using the latest language features while ensuring compatibility across different browsers.

Storybook Packages (e.g., @storybook/react, @storybook/addon-actions, @storybook/addon-links): Storybook is a tool for developing and testing UI components in isolation. It allows you to build a library of UI components and view them individually with different props and states. The addon packages enhance the capabilities of Storybook by adding features like actions (simulating user interactions), links (navigating between stories), and documentation (addon-essentials).

Testing Library Packages (e.g., @testing-library/react, @testing-library/jest-dom, @testing-library/user-event): Testing libraries provide utilities for writing tests that simulate user interactions with your components. They encourage testing from a user's perspective, ensuring that your components behave as expected. Jest is a testing framework that integrates with these libraries to run tests and provide assertions.

Babel and Jest Packages for Testing (e.g., babel-jest, jest-transform-stub): These packages allow you to use Babel's transpilation capabilities and Jest's test runner to execute tests. Jest, configured with Babel, ensures that your modern JavaScript code is transpiled during testing, enabling you to write tests using the latest language features.

Webpack Loaders (e.g., css-loader, style-loader, sass-loader): Webpack is a module bundler that handles different types of assets, including styles. Loaders like css-loader and sass-loader process CSS and Sass files respectively, while style-loader injects the styles into the HTML document. This allows you to modularize your styles and manage dependencies between styles and components.
HTML Webpack Plugin (html-webpack-plugin): This plugin simplifies the process of generating an HTML file that includes your bundled JavaScript and CSS files. It automatically injects the necessary script and link tags into the HTML template, ensuring that your application is correctly linked together when served.

ESLint Packages (e.g., eslint, eslint-plugin-*): ESLint is a tool for identifying and fixing code quality issues. It enforces coding standards and catches potential errors before runtime. Packages like eslint-config-airbnb and eslint-plugin-* provide predefined configurations and rules for maintaining a consistent codebase. eslint-plugin-react and eslint-plugin-react-hooks specifically help enforce best practices for React code.

Redux Packages (e.g., @reduxjs/toolkit, react-redux, redux): Redux is a state management library that helps manage the global state of your application. @reduxjs/toolkit provides utilities to simplify the creation and management of Redux stores, actions, and reducers. react-redux connects your React components to the Redux store, allowing them to access and update the global state.
UUID Package (uuid): The uuid package helps generate unique identifiers that can be used as keys for React components. This is especially useful when rendering lists of components, ensuring that each component has a unique identity.

Webpack and Webpack Dev Server (e.g., webpack, webpack-dev-server): Webpack is a core tool for bundling JavaScript and other assets for production. It allows you to create optimized bundles, splitting code, and assets efficiently. webpack-dev-server provides a development server that helps you test and iterate on your application while benefiting from features like hot module replacement.

eslint-webpack-plugin: This plugin integrates ESLint with the Webpack build process. It ensures that your code is checked for linting errors as part of the build, preventing problematic code from being bundled into the final build.

