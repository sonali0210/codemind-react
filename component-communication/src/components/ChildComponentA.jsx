import React from 'react'
import ChildComponentB from './ChildComponentB';

const ChildComponentA = (props) => {
    return (
    <div className="childA-container">
    <h2>Child Component A receiving the transmission</h2>
    <p>"Message received from Parent. Preparing to relay further...."</p>
    <ChildComponentB mssg = {props.mesg} userData = {props.data} />
    </div>
  )
}

export default ChildComponentA;
