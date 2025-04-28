import React from 'react'

const Body11 = (props) => {
  return (
    <>
        <h1>Body11</h1>
        <p>Inside Body11</p>
        <p>{props.txt}</p>
        <h2>Person Object: {JSON.stringify(props.personObj)}</h2>
        <h3>Array Values: {props.arrVal.join(",")}</h3>
    </>
  )
}

export default Body11
