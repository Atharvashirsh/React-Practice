# Day 1 notes 📝

-   Importing React Library using CDN.

-   **React** and **ReactDOM** is different.

-   While **React** is a library that allows to create elements, **ReactDOM** allows the element to be rendered on the Web browser.

-   React will override any element that is inside root before it is rendered.

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
-   There can only be one root for React.
-   `render()` function is used to render this element in the browser.
