import React from 'react'
const Footer = (props) => {
  // Destructuring props to get compName and compLoc
  const {compName, compLoc} = props;

  return (
    <>
        <h1>Footer</h1>
        <p>Welcome to Footer Component</p>
        <p>All rights reserved &copy; 2023</p>
        <p>{compName} , {compLoc}</p>
    </>
  )
}

export default Footer;
