import React from 'react';
import './Display.scss';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';


const CalculatorDisplay = props => {
    return(
        <div className="display"> {props.value}</div>
    );
};


export default CalculatorDisplay;