import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const arr1 = [{text: 'clear', buttonClass: 'wide-button'},
              {text: '÷', buttonClass: 'function-button'}, 
              {text: '7', buttonClass: 'number-button'},
              {text: '8', buttonClass: 'number-button'},
              {text: '9', buttonClass: 'number-button'},
              {text: 'X', buttonClass: 'function-button'},
              {text: '4', buttonClass: 'number-button'},
              {text: '5', buttonClass: 'number-button'},
              {text: '6', buttonClass: 'number-button'},
              {text: '-', buttonClass: 'function-button'},
              {text: '1', buttonClass: 'number-button'},
              {text: '2', buttonClass: 'number-button'},
              {text: '3', buttonClass: 'number-button'},
              {text: '+', buttonClass: 'number-button'},
              {text: '0', buttonClass: 'wide-button'},
              {text: '=', buttonClass: 'function-button'},];


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      calcDisplay: 0,
      num1: null,
      num2: null,
      keyPress: [],

    }
  }

  buttonClick = (event) => {
console.log(event.target.textContent);
if(event.target.textContent === 'clear') {
  this.setState({keyPress: [], calcDisplay : 0,
  num1: null,
num2: null});

} else if(event.target.textContent === '+') {
  this.setState({num1 : this.state.calcDisplay,
  calcDisplay: 0,
keyPress: []});

} else if(event.target.textContent === '=') {
  this.setState({num2: this.state.calcDisplay,
    keyPress: [],
  calcDisplay: parseInt(this.state.num1) + parseInt(this.state.num2)});

} else { if(this.state.num1 === null) {
  this.setState({keyPress: [...this.state.keyPress, event.target.textContent],
    calcDisplay: `${this.state.keyPress.join('')}${event.target.textContent}`})
} else{
  this.setState({keyPress: [...this.state.keyPress, event.target.textContent],
    calcDisplay: `${this.state.keyPress.join('')}${event.target.textContent}`,
  num2: `${this.state.keyPress.join('')}${event.target.textContent}`})
}
  
}

  }

  render(){
    return (
      <div className="calculator-display">
        <CalculatorDisplay value={this.state.calcDisplay}/>
        <ActionButton buttonClass="wide-button" text="clear" whenClicked={this.buttonClick} />
        <NumberButton buttonClass="function-button" text="÷" whenClicked={this.buttonClick} />
        <NumberButton buttonClass="number-button" text="7" whenClicked={this.buttonClick} />
        <NumberButton buttonClass="number-button" text="8" whenClicked={this.buttonClick} />
        <NumberButton buttonClass="number-button" text="9" whenClicked={this.buttonClick} />
        <NumberButton buttonClass="function-button" text="X" whenClicked={this.buttonClick} />
        <NumberButton buttonClass="number-button" text="4" whenClicked={this.buttonClick} />
        <NumberButton buttonClass="number-button" text="5" whenClicked={this.buttonClick} />
        <NumberButton buttonClass="number-button" text="6" whenClicked={this.buttonClick} />
        <NumberButton buttonClass="function-button" text="-" whenClicked={this.buttonClick} />
        <NumberButton buttonClass="number-button" text="1" whenClicked={this.buttonClick} />
        <NumberButton buttonClass="number-button" text="2" whenClicked={this.buttonClick} />
        <NumberButton buttonClass="number-button" text="3" whenClicked={this.buttonClick} />
        <NumberButton buttonClass="function-button" text="+" whenClicked={this.buttonClick} />
        <ActionButton buttonClass="wide-button" text="0" whenClicked={this.buttonClick} />
        <NumberButton buttonClass="function-button" text="=" whenClicked={this.buttonClick} />
      </div>
    );
  }
}


export default App;
