import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {
//     id: "heading"
// }, "Hello, world, from React!");
// this is verbose, hence JSX
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child", key: "e" }, [
//     React.createElement("h1", { key: "a" }, "I'm an H1 tag"),
//     React.createElement("h2", { key: "b" }, "I'm an H2 tag"),
//   ]),
//   React.createElement("div", { id: "child2", key: "f" }, [
//     React.createElement("h1", { key: "c" }, "I'm an H1 tag"),
//     React.createElement("h2", { key: "d" }, "I'm an H2 tag"),
//   ]),
// ]);
// console.log(parent);

// react element
// const heading = <h1 id="heading">Hello</h1>

// react component -> js function which returns a react element
// const HeadingComponent = () => { 
//     return <h1>React Component</h1>
//  }

const Header = () => {
    return (
        <div className="header">

        </div>
    )
}

const AppLayout = () => {
    return (
        <div>
            <Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// this replaces whatever is present inside the root element with parent
// root.render(heading);
root.render(<AppLayout />)
