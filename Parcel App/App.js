import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {}, "Welcome to React!!!"); /*tag, properties, content*/
const heading1 = React.createElement("h1", {}, "Heading 1 for parcel"); /*tag, properties, content*/
const heading2 = React.createElement("h2", {}, "Heading 2"); /*tag, properties, content*/

// const container = React.createElement(
//     "div",
//     {
//         id: "container",
//         hello: "world", // Irrelevent props
//         christiano: "ronaldo", // Irrelevent props
//     },
//     [heading1, heading2]
// );

/*
<div id="header">
    <h1>React App</h1>
    <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
    </ul>
</div>
*/

// Heading Bar
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

// console.log("hello");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
