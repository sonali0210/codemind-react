import React, { Fragment } from 'react';

const SimpleCalculator = () => {
    let a = 30;
    let b = 20;
    let sum = a + b;
    let difference = a - b;
    let product = a * b;
    let division = a / b;
    
    return(
        <Fragment>
            <h1 id='assignment-title'>Assignment 1: Simple Arithmetic in JSX</h1>
            <h4 className='value'>Value of 'a' : {a}</h4>
            <h4 className='value'>Value of 'b' : {b}</h4>

            <p className='operations'>Operations performed using Javascript Expressions</p>

            <h4 className='op1'>Sum of a and b : {sum}</h4>
            <h4 className='op1'>Difference of a and b : {difference}</h4>
            <h4 className='op1'>Product of a and b : {product}</h4>
            <h4 className='op1'>Division of a and b : {division}</h4>
        </Fragment>
    );
}

export default SimpleCalculator;