# Skratch - WIP

:desktop_computer: A Web Extension starter kit built with React, TypeScript, Storybook, EsLint, Prettier, Jest, TailwindCSS, &amp; Webpack. Compatible with Google Chrome, Mozilla Firefox, Brave, and Microsoft Edge.

**Getting Started**

Run the following commands to install dependencies and start developing

```
yarn install
yarn dev
```

**Scripts**

-   `yarn dev` - run `webpack` in `watch` mode
-   `yarn storybook` - runs the Storybook server
-   `yarn build` - builds the production-ready unpacked extension
-   `yarn test -u` - runs Jest + updates test snapshots
-   `yarn lint` - runs EsLint
-   `yarn prettify` - runs Prettier

<details>
  <summary>Loading the extension in Google Chrome</summary>

In [Google Chrome](https://www.google.com/chrome/), open up [chrome://extensions](chrome://extensions) in a new tab. Make sure the `Developer Mode` checkbox in the upper-right corner is turned on. Click `Load unpacked` and select the `dist` directory in this repository - your extension should now be loaded.

</details>

<details>
  <summary>Loading the extension in Brave</summary>

In [Brave](https://brave.com/), open up [brave://extensions](brave://extensions) in a new tab. Make sure the `Developer Mode` checkbox in the upper-right corner is turned on. Click `Load unpacked` and select the `dist` directory in this repository - your extension should now be loaded.

</details>

<details>
  <summary>Loading the extension in Mozilla Firefox</summary>

In [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/), open up the [about:debugging](about:debugging) page in a new tab. Click the `This Firefox` link in the sidebar. One the `This Firefox` page, click the `Load Temporary Add-on...` button and select the `manfiest.json` from the `dist` directory in this repository - your extension should now be loaded.

</details>

<details>
  <summary>Loading the extension in Microsoft Edge</summary>

In [Microsoft Edge](https://www.microsoft.com/en-us/edge), open up [edge://extensions](edge://extensions) in a new tab. Make sure the `Developer Mode` checkbox in the lower-left corner is turned on. Click `Load unpacked` and select the `dist` directory in this repository - your extension should now be loaded.

</details>

**Notes**

-   Includes ESLint configured to work with TypeScript and Prettier.

-   Includes tests with Jest - note that the `babel.config.js` and associated dependencies are only necessary for Jest to work with TypeScript.

-   Recommended to use `Visual Studio Code` with the `Format on Save` setting turned on.

-   [Microsoft Edge](https://www.microsoft.com/en-us/edge) is not currently supported.

**Built with**

-   [React](https://reactjs.org)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Storybook](https://storybook.js.org/)
-   [Jest](https://jestjs.io)
-   [Eslint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [Webpack](https://webpack.js.org/)
-   [Babel](https://babeljs.io/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [webextension-polyfill-ts](https://github.com/Lusito/webextension-polyfill-ts)

**Misc. References**

-   [Chrome Extension Developer Guide](https://developer.chrome.com/extensions/devguide)
-   [Firefox Extension Developer Guide](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
-   [Eslint + Prettier + Typescript Guide](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)
