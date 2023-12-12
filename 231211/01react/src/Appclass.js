import React, { Component } from "react";
import "./Appclass.css";
import Boxclass from "./Boxclass";

//classcomponenet rcc
export default class Appclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter2: 0,
      value: 0,
    };
  }
  increase = () => {
    this.setState({
      counter2: this.state.counter2 + 1,
      value: this.state.value + 1,
    });
    // this.componentDidMount(); {
    //   console.log('componentdidupdate');
    // }
    // this.componentDidUpdate(); {
    //   console.log(`componentdidupdate`, this.state);
    // }
  };
  render() {
    console.log(`constructor`);
    return (
      <div className="AppClass">
        <div>{this.state.counter2}</div>
        <button onClick={this.increase}>Click</button>
        {this.state.counter2 < 3 && <Boxclass num={this.state.value} />}
      </div>
    );
  }
}
