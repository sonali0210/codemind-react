import ChildComponentA from "./ChildComponentA";
import React from "react";

const ParentComponent = (props) => {
    return(
        <div className="parent-container">
            <h2> Welcome to Parent Component</h2>
            <p>"I am the origin of the message. Sending wisdom ahead..."</p>
            <ChildComponentA mesg = {props.msg} data = {props.obj}/>
        </div>
    );
}

export default ParentComponent;
