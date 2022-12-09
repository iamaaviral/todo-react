import React from 'react'

const TestComponent = (props) => {
    // console.log(props.children)
    return (
        <div>
            <h1>TestComponent</h1>
            {props.children}
            {/* {props.userInput} */}
        </div>
    )
}

export default TestComponent;