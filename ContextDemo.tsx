import React, { useContext, createContext } from "react";

const MessageContext = createContext();

const GrandParent = () => {
  return (
    <div
      style={{
        backgroundColor: "darkGrey",
      }}
    >
      <div>Grandparent Component</div>
      <MessageContext.Provider
        value={{
          message: "Chill",
        }}
      >
        <Parent message={"Chill"} />
      </MessageContext.Provider>
    </div>
  );
};

const Parent = (props) => {
  return (
    <div
      style={{
        backgroundColor: "yellow",
      }}
    >
      <div>Parent Component</div>
      {/* <Child message={"Clean room"} /> */}
      {/* <Child {...props} /> */}
      <Child />
    </div>
  );
};

const Child = (props) => {
  const ctx = useContext(MessageContext);
  return (
    <div
      style={{
        backgroundColor: "orange",
      }}
    >
      <div>Child Component</div>
      <div>My task is to: {ctx.message}</div>
    </div>
  );
};

const ContextDemo = () => {
  return (
    <div
      style={{
        backgroundColor: "gray",
      }}
    >
      <div>ContextDemo</div>
      <GrandParent />
    </div>
  );
};

export default ContextDemo;
