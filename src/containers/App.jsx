import React, { Component } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import ClearButton from "../components/ClearButton";
import "./App.css";

class App extends Component {
  constructor () {
    super();
    this.state = {
      input: ''
    }
  }

  handleInput = value => {
    this.setState({input: this.state.input + value});
  }

  handleClear = () => {
    this.setState({input: ''});
  }

	render() {
		return (
			<div className="App">
				<div className="calc-wrapper">
          <Input input={this.state.input}/>
          <div className="row">
            <Button onInput={this.handleInput}>7</Button>
            <Button onInput={this.handleInput}>8</Button>
            <Button onInput={this.handleInput}>9</Button>
            <Button onInput={this.handleInput}>/</Button>
          </div>
          <div className="row">
            <Button onInput={this.handleInput}>4</Button>
            <Button onInput={this.handleInput}>5</Button>
            <Button onInput={this.handleInput}>6</Button>
            <Button onInput={this.handleInput}>X</Button>
          </div>
          <div className="row">
            <Button onInput={this.handleInput}>1</Button>
            <Button onInput={this.handleInput}>2</Button>
            <Button onInput={this.handleInput}>3</Button>
            <Button onInput={this.handleInput}>+</Button>
          </div>
          <div className="row">
            <Button onInput={this.handleInput}>.</Button>
            <Button onInput={this.handleInput}>0</Button>
            <Button onInput={this.handleInput}>=</Button>
            <Button onInput={this.handleInput}>-</Button>
          </div>
          <div className="row">
          <ClearButton onClear={this.handleClear}>Clear</ClearButton>
          </div>
        </div>
			</div>
		);
	}
}

export default App;
