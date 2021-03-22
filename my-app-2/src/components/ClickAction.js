import { Component } from "react";

class ClickAction extends Component {
    constructor(props) {
        super(props);
        
    }

    Click = (props) => {
        alert('Hello' + this.Name);
    }

    Click_2 = (Name) => {
        alert('Hello' + Name);
    }

    render() {
        return (
            <div>
                <button type="button" class="btn btn-primary" onClick = {this.Click_2('Hao HUynh')}></button>
            </div>
        );
    }
}

export default ClickAction;
