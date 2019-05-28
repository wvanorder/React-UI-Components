import React from 'react';
import './Button.css';

const ActionButton = props => {
    return(
        <div className={props.buttonClass}>{props.text}</div>
    )
}

export default ActionButton;
