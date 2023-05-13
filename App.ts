// const heading = React.createElement("h1", {
//     id: "heading"
// }, "Hello, world, from React!");
// this is verbose, hence JSX
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "e" }, [
    React.createElement("h1", { key: "a" }, "I'm an H1 tag"),
    React.createElement("h2", { key: "b" }, "I'm an H2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: "f" }, [
    React.createElement("h1", { key: "c" }, "I'm an H1 tag"),
    React.createElement("h2", { key: "d" }, "I'm an H2 tag"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
// this replaces whatever is present inside the root element with parent
root.render(parent);
