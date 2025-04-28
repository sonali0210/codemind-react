import React, { Component } from 'react'
import Student from './Student.jsx';

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.year = 2025;
        this.remainingFee = 2000;
    }
    render() {
        return (
            <>
                <h1>Account Details</h1>
                <Student year = {this.year} remFee = {this.remainingFee}/>
            </>
    )
  }
}
