import { Fragment } from "react";

const MathOperations = ()=>{
    const multiply = (a,b) =>{
        let product = a * b;
        return(
            <Fragment>
                <p className="operation-result">Multiplication of {a} and {b} : {product}</p>
            </Fragment>
        );
    
    };
    return(
        <Fragment>
            <br />
            <br />
            <h1 id="math-title">Assignment 2: Create a function and call it in JSX</h1>
            <h4 className="math-subtitle">Multiplication of two numbers</h4>
            {multiply(5,3)}
            {multiply(7,2)}
        </Fragment>
    );
}



export default MathOperations;