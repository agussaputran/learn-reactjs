import React, { Component } from "react";
import Counter from "../components/Counter";

export default class Home extends Component {
    render() {
        const description = "Description pake variable";
        return (
            <div>
                <h1>Class Lifecyle</h1>
                <Counter title="Counter" description={description} />
            </div>
        );
    }
}
