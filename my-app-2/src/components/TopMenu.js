import { Component } from "react";

class TopMenu extends Component {
    constructor(props) {
        super(props);
    }

    OnClickAction = (Name) => {
        alert("Hello " + Name);
    }
    render() {
        return (
            <div>
                 {/* Navigation */}
                <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                    <div className="container">
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={() => this.OnClickAction("HaoHuynh")}>
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sign Up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Log In</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default TopMenu;
