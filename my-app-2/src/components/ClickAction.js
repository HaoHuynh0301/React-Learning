import { Component } from "react";

class ClickAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthai: 1,
            value: "",
            usrname: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <div>
                <form submit={this.handleSubmit}>
                    <label>Name: </label>
                    <input type="text" value={this.state.usrname} onChange={this.handleChange}/>
                    <input type="button" value="submit"/>
                </form>

            </div>
        )
    }
}

export default ClickAction;
