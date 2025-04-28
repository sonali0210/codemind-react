import React from 'react'
import { useState } from 'react'

const StateInFuncComponent = () => {
    // const name = "Sonali";
    const [name,setName] = useState("Sonali"); // useState is a hook that allows you to add state to functional components
    const changeUserName = () => {
        // name = "Soniya"; // This will throw an error because name is a constant
        setName("Soniya"); // This will also throw an error because setName is not defined
        console.log("Name changed to Soniya");
    }

    const changeName = () => {
        setName("Sonali"); // This will also throw an error because setName is not defined
        console.log("Name changed to Sonali");
    }

  return (
    <>
        <h1>State in Functional Component</h1>
        <h2>My name is {name}</h2>
        <button onClick={changeName}>Change Name</button>
        <button onClick={changeUserName}>Change UserName</button>

    </>
  )
}

export default StateInFuncComponent
