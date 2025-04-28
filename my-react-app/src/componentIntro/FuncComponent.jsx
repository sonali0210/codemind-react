import React from "react";

function FuncComponent() {
  const myName = "Sonali Surpatne";


  return (
    // <div>
    //   <h1>Functional Component</h1>
    //   <p>This is a functional component in React.</p>
    //   <p>My name is {myName}.</p>
    // </div>
    <React.Fragment>
      <h1>Functional Component</h1>
      <p>This is a functional component in React.</p>
      <p>My name is {myName}.</p>
    </React.Fragment>
  );
}

export default FuncComponent;