import React, { Component } from 'react'

export default class Student extends Component {


  render() {
    return (
      <>
        <h1>Student Details</h1>
        <p>This is inside student component</p>
        <h2>Year: {this.props.year}</h2>
        <h2>Remaining Fee: {this.props.remFee}</h2>
        
      </>
    )
  }
}
