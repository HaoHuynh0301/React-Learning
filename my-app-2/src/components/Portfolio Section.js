import { Component } from "react";

export default class PortfolioSection extends Component {
    render() {
        return (
            <div>
                <section className="page-section portfolio" id="portfolio">
                    <div className="container">
                    {/* Portfolio Section Heading*/}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Grid Items*/}
                    <div className="row justify-content-center">
                        {/* Portfolio Item 1*/}
                        <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                            </div>
                            <img className="img-fluid" src="assets/img/portfolio/cabin.png" alt="" />
                        </div>
                        </div>
                        {/* Portfolio Item 2*/}
                        <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                            </div>
                            <img className="img-fluid" src="assets/img/portfolio/cake.png" alt="" />
                        </div>
                        </div>
                        {/* Portfolio Item 3*/}
                        <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                            </div>
                            <img className="img-fluid" src="assets/img/portfolio/circus.png" alt="" />
                        </div>
                        </div>
                        {/* Portfolio Item 4*/}
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                            </div>
                            <img className="img-fluid" src="assets/img/portfolio/game.png" alt="" />
                        </div>
                        </div>
                        {/* Portfolio Item 5*/}
                        <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                            </div>
                            <img className="img-fluid" src="assets/img/portfolio/safe.png" alt="" />
                        </div>
                        </div>
                        {/* Portfolio Item 6*/}
                        <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                            </div>
                            <img className="img-fluid" src="assets/img/portfolio/submarine.png" alt="" />
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        );
    }
}
