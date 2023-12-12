import React, { Component } from "react";

export default class Boxclass extends Component {
  componentWillUnmount() {
    console.log(`byebye`);
  }
  render() {
    return <div>Box {this.props.num}</div>;
  }
}
