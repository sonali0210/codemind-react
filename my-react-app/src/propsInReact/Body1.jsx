import React from 'react'
import Body11 from './Body11'

const Body1 = (props) => {
  let person = {
    name: "John",
    age: 30,
    city: "New York"
  }

  let arr = [1, 2, 3, 4, 5];
  return (
    <>
        <h1>Body1</h1>
        <p>Inside Body1</p>
        <Body11 txt = {props.text} personObj = {person} arrVal = {arr} />
    </>
  )
}

export default Body1
