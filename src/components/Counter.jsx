import React, { Component } from "react";

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }
    addCount = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };
    subCount = () => {
        this.setState({
            count: this.state.count - 1,
        });
    };
    render() {
        console.log("this", this);
        console.log("props", this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <h1>{this.state.count}</h1>
                <div>
                    <button onClick={this.addCount}>+</button>
                    <button onClick={this.subCount}>-</button>
                </div>
            </div>
        );
    }
}
