import React from 'react'

const user = (props) => {
    return(
    <li>
        <span>Name: {props.children}, age= {props.age}</span>
        <input onChange={props.changeEvent} value={props.children} name="users"/>
        <button onClick={props.deleteElement}>Delete</button>
            
    </li>
    )
}

export default user
