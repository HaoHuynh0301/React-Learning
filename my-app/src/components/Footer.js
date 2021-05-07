import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                {/* Footer */}
                    <footer>
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                            <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                <a href="#">
                                    <span className="fa-stack fa-lg">
                                    <i className="fas fa-circle fa-stack-2x" />
                                    <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                                    </span>
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="https://www.facebook.com/hulo.bungchay/">
                                    <span className="fa-stack fa-lg">
                                    <i className="fas fa-circle fa-stack-2x" />
                                    <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                                    </span>
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="https://github.com/HaoHuynh0301">
                                    <span className="fa-stack fa-lg">
                                    <i className="fas fa-circle fa-stack-2x" />
                                    <i className="fab fa-github fa-stack-1x fa-inverse" />
                                    </span>
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </footer>
            </div>
        );
    }
}

export default Footer;
