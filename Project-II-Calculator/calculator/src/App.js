import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calculator-display">
      <CalculatorDisplay value="0"/>
      <ActionButton buttonClass="wide-button" text="clear"/>
      <NumberButton buttonClass="function-button" text="/"/>
      <NumberButton buttonClass="number-button" text="7"/>
      <NumberButton buttonClass="number-button" text="8"/>
      <NumberButton buttonClass="number-button" text="9"/>
      <NumberButton buttonClass="function-button" text="X"/>
      <NumberButton buttonClass="number-button" text="4"/>
      <NumberButton buttonClass="number-button" text="5"/>
      <NumberButton buttonClass="number-button" text="6"/>
      <NumberButton buttonClass="function-button" text="-"/>
      <NumberButton buttonClass="number-button" text="1"/>
      <NumberButton buttonClass="number-button" text="2"/>
      <NumberButton buttonClass="number-button" text="3"/>
      <NumberButton buttonClass="function-button" text="+"/>
      <ActionButton buttonClass="wide-button" text="0"/>
      <NumberButton buttonClass="function-button" text="="/>
    </div>
  );
};

export default App;
