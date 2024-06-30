// const heading = React.createElement("h1", {}, "Welcome to React!!!"); /*tag, properties, content*/
const heading1 = React.createElement("h1", {}, "Heading 1"); /*tag, properties, content*/
const heading2 = React.createElement("h2", {}, "Heading 2"); /*tag, properties, content*/

const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
