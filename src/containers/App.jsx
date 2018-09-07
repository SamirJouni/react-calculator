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


  appendToInput = value => {
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
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>/</Button>
          </div>
          <div className="row">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>X</Button>
          </div>
          <div className="row">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
          </div>
          <div className="row">
            <Button>.</Button>
            <Button>0</Button>
            <Button>=</Button>
            <Button>-</Button>
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
