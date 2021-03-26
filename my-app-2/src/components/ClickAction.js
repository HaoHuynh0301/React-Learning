import { Component } from "react";

class ClickAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthai: 1
        };
    }

    Display = () => {
        if(this.state.trangthai === 0) {
            return <h1>Hello 0</h1>
        } else return <h1>Hello 1</h1>
    }

    SetState = () => {
        if(this.state.trangthai === 1) {
            this.setState({trangthai: 0});
        } else this.setState({trangthai: 1});
    }

    render() {
        return (
            <div>
               <button onClick={this.SetState}>Click Here</button>
               <this.Display/>
            </div>
        )
    }
}

export default ClickAction;
