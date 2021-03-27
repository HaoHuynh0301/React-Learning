import { Component } from "react";

class Sections extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="p-5">
                            <img className="img-fluid rounded-circle" src="img/02.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-5">
                            <h2 className="display-4">We salute you!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5">
                            <img className="img-fluid rounded-circle" src="img/03.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5">
                            <h2 className="display-4">Let there be rock!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Sections;
