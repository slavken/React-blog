import React, {Component} from 'react';
import slider from '../assets/slider.png';

export default class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleControls" className="carousel slide mb-5" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slider} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slider} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slider} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}