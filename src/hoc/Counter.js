import React, { Component } from 'react'
import Content from './Content';

export class Counter extends Component {
  constructor(props){
    super(props);

    this.state = {
        count: 0
    }
  }  

  handleUp = () =>  {
    this.setState({
        count: this.state.count+1
    })
  }
  render() {

    const {count} = this.state;

    return (
      <>
        <h1>Counter {count}</h1>
        <Content count={count}/>
        <button type='button' onClick={this.handleUp}>Up</button>
      </>
    )
  }
}

export default Counter