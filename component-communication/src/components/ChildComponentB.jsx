import React from 'react'

const ChildComponentB = (props) => {
    const {name,age,city,hobbies} = props.userData;
    return (
        <div className="childB-container">
        <h2>Child Component B - The Final Destination</h2>
        <h4>"Successfully received the wisdom from Parent via Child A"</h4>
        <p className="inherited">Received Message: <strong>"{props.mssg}"</strong></p>
        <p className="inherited">Name: <strong>{name}</strong></p>
        <p className="inherited">Age: <strong>{age}</strong></p>
        <p className="inherited">City: <strong>{city}</strong></p>
        <p className="inherited">Hobbies: <strong>{hobbies.join(", ")}</strong></p>

    </div>

  )
}

export default ChildComponentB;
