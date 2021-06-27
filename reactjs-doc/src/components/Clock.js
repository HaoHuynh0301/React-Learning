import { Component } from "react";

class Clock extends Component {
    render() {
        return (
            <div className="contaner">
                <h1>Hello Reactjs</h1>
                <h2>It is {this.props.date}</h2>
            </div>
        );
    }
}

export default Clock;