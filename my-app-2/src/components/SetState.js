import { Component } from "react";

class SetState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 1
        }
    }

    

    SetState = () => {
        if(this.state.status === 1) {
            this.setState({ status: 0})
        } else this.setState({ status: 1})
    }

    Display = () => {
        if(this.state.status === 1) {
            return <h1 className="text-center">Hello 1</h1>
        } else return <h1 className="text-center">Hello 2</h1>
    }

    render() {
        return (
            <div>
                <button className="btn-info-center" onClick={() => this.SetState()}>Click</button>
                <this.Display/>
            </div>
        );
    }
}

export default SetState;
