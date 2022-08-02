import React from "react";

export default class Counter01 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0
        }
    }

    handleUp = () => {
        this.setState({
            count: ++this.state.count
        });
    }

    handleDown = () => {
        this.setState({
            count: --this.state.count
        });
    }

    render(){
        return (
            <>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleDown}>-</button>
                <button onClick={this.handleUp}>+</button>
            </>
        );
    }
}