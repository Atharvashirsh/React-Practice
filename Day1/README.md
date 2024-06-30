# Day 1 notes 📝

-   The browser knows about the document object from the Browser APIs.

-   What is Crossorigin? [Link to Ofiicial documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

-   Importing React Library using CDN.

-   **React** and **ReactDOM** is different.

-   While **React** is a library that allows to create elements, **ReactDOM** allows the element to be rendered on the Web browser.

-   React will override any element that is inside root before it is rendered.

-   React can be user for only a single functionality in an application like creating a navbar, etc.

-   Shortest Javascript program? `Empty file with .js extension`

-   Shotest React program? `HTML file with <div id="root"></div> and React CDN links`

-   React Development CDN is different from React Production CDN.

## Code

```js
const heading = React.createElement("h1", {}, "Welcome to React!!!");
```

-   This code creates an _h1_ element in React.
-   The _typeof_ `heading` is Object. React stores the element it creates as simple objects in Javascript.

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

-   The `root` is created in the HTML file and the React is injected inside this `root`.
-   There can only be `one root` and `one render() function` for React.
-   `render()` function is used to render this element in the browser.
