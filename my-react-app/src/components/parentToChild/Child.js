import React from 'react';

const child = (props) => {
return(
    <div>
        <h1>kjkd</h1>
        <button onClick={props.doWhatEver}>{props.title}</button>
    </div>
)
}

export default child;