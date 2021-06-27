import { Component } from "react";

class Doc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000)
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <h1>Hello {this.state.date.toLocaleTimeString()}</h1>
        );
    }
}

export default Doc;