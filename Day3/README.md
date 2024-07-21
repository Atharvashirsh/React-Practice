# Day 3 notes 📝

-   `"browserslist"` specifies that the code will definitely work on that version of the browser.

-   `Polyfill` is a code that converted from a newer version of the code to the lower version of the code.\
     i.e newer code is converted to older code.

-   `Babel` is responsible to convert newer code to older code.\
    `Babel` gets to know about which older version to convert the code to is using **browserslist**

-   **Tree Shaking** means that removing unwanted code from the application.\
    _Example: Suppose you have a library that imports 10 functions but we are using only 2 functions so the Bundler will ignore all the remaining unwanted code_

-   `create-react-app` uses `Webpack` as a bundler along with `Babel`.

-   `npm run` is equivalent to `npx`

    -   If I run the command `npx parcel index.html` : it will execute the Parcel package with entry point as `index.html`
    -   It will be same as executing `npm run parcel index.html` because `npm` is used to download packages and `npm run` will execute these packages.
    -   Whereas `npx` will just execute the package and there is no need to download locally.

-   **Execute a package without using _npm_ :**

    -   To execute a local package without using `npm` is by using the local path of the package in the `node_modules` folder.
    -   The `node_modules` contains all the installed packages.
    -   The path of the package will be : `./node_modules/.bin/your-package`
    -   Using this path we can run the Parcel package : `./node_modules/.bin/parcel index.html`

-   **Execute a package using _npm_ :**

    -   To execute a package using `npm`, we need to create a script of the package in our `package.json` file.
    -   The `scripts` in `package.json` file contains all the scripts to run using `npm`
    -   The script will be :

    ```js
    {
        "name": "your-application",
        "version": "1.0.0",
        "scripts": {
            "your-package": "your-package"
        }
    }
    ```

    -   To run this script, we will use the `npm run` command : `npm run your-package`

-   **Execute a package using _npx_ :**

    -   To execute a package using `npx` you need to just simple write : `npx package-name`
    -   This will execute the package that is locally installed.
    -   `npx` can even execute packages without even installing it locally and cluttering your `package.json` file.

    ```bash
    >>> npx cowsay moo
    Need to install the following packages:
    cowsay@1.6.0
    Ok to proceed? (y)
    _____
    < moo >
    -----
            \   ^__^
             \  (oo)\_______
                (__)\       )\/\
                    ||----w |
                    ||     ||
    ```

    -   `npx` can execute Github gists or repositories.

    ```bash
    >>> npx https://gist.github.com/Atharvashirsh/b0392e90bc1cc89c13f4becbfcf4d2dd

    Hello, World
    ```

    -   [freeCodeCamp - npm vs npx](https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/) : This doc contains more info about what `npx` can do.

-   **Parcel** doesn't remove the `console.log()` statements when building the project but we can configure it to remove the console.log() statements by using : `babel-plugin-transform-remove-console`, which is a Babel plugin that removes the `console.log()` statements from build versions.

-   Even after installing this plugin for **Babel**, Parcel still wont remove the `console.log()` statements because we need to configure Babel to use the `babel-plugin-transform-remove-console` plugin.\
    `.babelrc` is the configuration file for **Babel** :

    ```json
    {
        "plugins": [["transform-remove-console", { "exclude": ["error", "warn"] }]]
    }
    ```

    -   This suggests that Babel should use the `"transform-remove-console"` plugin and should exclude `console.error()` and `console.warn()` statements.

-   **Reconciliation**\
    If you have multiple children in a component, then you need to provide each children with a key property.
    [React Reconciliation](https://legacy.reactjs.org/docs/reconciliation.html)

    ```js
    const heading1 = React.createElement("h1", { key: "h1" }, "Heading 1");
    const heading2 = React.createElement("h2", { key: "h2" }, "Heading 2");
    ```

-   To create a simple header using the basic `React.createElement()` it will be a big hassle.

    ```js
    const container = React.createElement(
        "div",
        {
            id: "container",
        },
        [
            React.createElement("h1", {}, "React App"),
            React.createElement("ul", {}, [React.createElement("li", {}, "Home"), React.createElement("li", {}, "About Us"), React.createElement("li", {}, "Contact")]),
        ]
    );
    ```

    In order to reduce the complexity of this, we can use `JSX`

-   **JSX**\
    The idea of React was to use Javascript to create the HTML elements.\
    But the `createElement` API from React was too lengthy and complex to write.\
    Thus, JSX was introduced.

    ```jsx
    const heading = <h1> Hello World</h1>;
    ```

    `JSX` is not HTML code inside JS. JSX is like HTML like syntax.
