import React, { Component } from "react";
import Counter from "../components/Counter";

export default class Home extends Component {
    // constructor() {
    //   super();
    //   this.state = {
    //     count: 0,
    //   };
    // }
    // addCount = () => {
    //   this.setState({
    //     count: this.state.count + 1,
    //   });
    // };
    // subCount = () => {
    //   this.setState({
    //     count: this.state.count - 1,
    //   });
    // };
    render() {
        const description = "Description pake variable";
        return (
            <div>
                <h1>HomePage</h1>
                <Counter
                    title="Judul"
                    description={description}
                // number={this.state.count}
                // add={this.addCount}
                // sub={this.subCount}
                />
            </div>
        );
    }
}
