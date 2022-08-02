import React from "react";

export default class Counter extends React.Component{
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
                {this.props.render({
                    count: this.state.count,
                    handleUp: this.handleUp,
                    handleDown: this.handleDown
                })}
            </>
        );
    }
}