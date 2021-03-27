import { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div>
                <header className="masthead text-center text-white">
                    <div className="masthead-content">
                    <div className="container">
                        <h1 className="masthead-heading mb-0">One Page Wonder</h1>
                        <h2 className="masthead-subheading mb-0">Will Rock Your Socks Off</h2>
                        <a href="#" className="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a>
                    </div>
                    </div>
                    <div className="bg-circle-1 bg-circle" />
                    <div className="bg-circle-2 bg-circle" />
                    <div className="bg-circle-3 bg-circle" />
                    <div className="bg-circle-4 bg-circle" />
                </header>
            </div>
        );
    }
}

export default Header;
