# Day 2 notes 📝

-   To create an element in Javascript: `document.createElement()`

-   We can pass anything as key:value pair to the properties of `React.createElement()`]
    These are also known as `props` in React.
    \
    \
    For Example,

```js
const container = React.createElement(
    "div",
    {
        id: "container",
        hello: "world", // Irrelevent props
        christiano: "ronaldo", // Irrelevent props
    },
    [heading1, heading2]
);
```

-   To make code production ready, we need to :\
    Minify our file, Bundle the app, Optimize the code and Remove the console.log statements

-   These tasks are performed automatically by a `Bundler`

-   **Bundlers** : `Vite` , `Parcel` , `Webpack`

-   To add a Bundler in our code, like `Parcel` which is a **JavaScript Package**,\
    We need a `Package Manager` like `npm` or `yarn`

-   Our React app is powered by a lot of helper packages, therefore we need to manage the Packages.

```bash
npm install -D parcel
```

`-D` or `--save-dev` : It is used to install a package as a **dev dependency**, i.e the package will be stored on only the developer's machine.

This code creates a new file `package-lock.json` which will contain this code :

```json
"devDependencies": {
    "parcel": "^2.12.0"
}
```

-   The `~ (Tilde)` sign in front of the version means the code is **Approximate equivalent to version**.\
    This will make updates to all future patch versions without incrementing the minor version.\
    `~1.2.3` will use releases from `1.2.3` to `< 1.3.0`

-   The `^ (Caret)` sign means **Compatible with this version**\
    This will make updates to all future minor/patch versions without incrementing the minor version.\
    `^2.3.4` will use releases from `2.3.4` to `< 3.0.0`

-   No sign in front of the version means to **Not to Upgrade the version**

-   `package-lock.json` :\
    This file **locks** the version of the packages that the code is depend upon.\
    It uses a **Hashmap** to map the dependency to its version.\
    **Never keep `package-lock.json` in the .gitignore file.**

-   `node_modules` :\
    This directory contains the **helper codes** of the packages.

-   Should you add `node_modules` to the git repository?\
    No, because `package-lock.json` can be used to make the `node_modules`\
    It contain all the details of the packages which can be installed.

-   `node_modules` is stored in the server when application is deployed into production.

-   Fetching data from our own server is faster than fetching data from another's CDN.

-   `npx` means to execute using `npm`

-   `Parcel` creates a local server to run our application.

-   `type = "module"` in the `<script>` tag specifies that the file in a **module** and not a normal script file.

-   `Hot Module Replacement (HMR)`\
    It is a technique done by Parcel to update the modules in the web application without refreshing the page.

-   `File Watcher Algorithm`\
    It is written in C++\
    It is used by Parcel which monitors any changes in the files.

-   `.parcel-cache`\
     This folder contains binary files which is used by Parcel to perform its functions.

-   `dist`\
     This folder contains a minified version of our application.

-   `npx parcel index.html`\
    This creates a **faster development build** and hosts it on a **server**.\
    To make a Production build, use this command:\
    `npx parcel build index.html`

-   When using Parcel, we dont need entry point of our application in `package-lock.json` because we will specify the entry point of our Application when initialising Parcel.

-   **Parcel Funtionality :-**

    -   Bundling
    -   Minify
    -   Cleaning our Code
    -   Creating a Server
    -   Development and Production Build
    -   Super Fast build algorithm
    -   Image Optimization
    -   Caching while Development
    -   File Compression
    -   Compatiblity with older browser versions
    -   Enable HTTPS on dev machine
    -   Port number management
    -   Zero Config
    -   `Consistent Hashing Algorithm`
    -   `Hot Module Replacement`
    -   `File Watcher Algorithm`

-   **Dependency Tree** is a tree of dependencies which shows how the dependencies are dependent on each other.\
    **Transitive Dependencies** is the chain of the dependency that depend on each other.
