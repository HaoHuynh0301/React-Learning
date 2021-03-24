import { Component } from "react";

class ClickAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthai: 1
        };
    }

    Click = () => {
        console.log(this.state.trangthai);
        if(this.state.trangthai === 1) {
            setState 
        } else this.state.trangthai = 1;
    }

    DisplayButton = () => {
        if (this.state.trangthai === 0) {
            return this.Display1();
        } else {
            this.Display2();
        }
    }


    Display1 = () => (
        <div>
            <h1>Hello 1</h1>
        </div>
    )

    Display2 = () => (
        <h1>Hello</h1>
    )

    render() {
        return (
            <div>

                {() => this.DisplayButton()}
            </div>
        );
    }
}

export default ClickAction;
