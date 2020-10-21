import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../sass/style.sass";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Footer from "../footer/Footer";

export default class ImagesVilles extends React.Component {
    render() {
        return (
            <div className={this.props.class2}>
                {/* Row 1 */}
                <div className="row paysagesImg">
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/villes/img1.jpg" alt="a" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Mesa Arch, US
                                </h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="###" className="btn btn-primary pr-4 pl-4 text-center">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/villes/img2.jpg" alt="a" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Brand, Telfs, Austria
                                </h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="###" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/villes/img3.jpg" alt="a" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Shrine Pass Road, US
                                    </h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="###" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/villes/img4.jpg" alt="a" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Opert, Semnan, Iran
                                </h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="###" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Row 2 */}
                <div className="row paysagesImg">
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/villes/img5.jpg" alt="a" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Lake Atitlan, Guatermala
                                </h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="###" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/villes/img6.jpg" alt="a" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />North Khorasan Province, Iran
                                </h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="###" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/villes/img7.jpg" alt="a" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Reflection Lakes, US
                                    </h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="###" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/villes/img8.jpg" alt="a" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Atacama Desert, Chine
                                </h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="###" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Row 3 */}
                <div className="row paysagesImg">
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/villes/img9.jpg" alt="a" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Aerial River, Iceland
                                </h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="###" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/villes/img10.jpg" alt="a" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Aerial View of Beach
                                    </h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="###" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/villes/img11.jpg" alt="a" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Mountian Village, Italy
                                    </h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="###" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/villes/img12.jpg" alt="a" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Lac de Moiry, Switzerland
                                    </h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="###" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Row 4 */}
                <div className="row paysagesImg">
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/villes/img13.jpg" alt="a" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Burren Way, Ireland
                                </h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="###" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/villes/img14.jpg" alt="a" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Kauai County, US
                                </h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="###" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/villes/img15.jpg" alt="a" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Eagle Canyon, Canada
                                </h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="###" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/villes/img16.jpg" alt="a" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Procida, Italy
                                </h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="###" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Row 5 */}
                <div className="row paysagesImg">
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/villes/img17.jpg" alt="a" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Pelasgia, Greece
                                </h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="###" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/villes/img18.jpg" alt="a" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Angle Tarn, UK
                                </h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="###" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/villes/img19.jpg" alt="a" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Willow River, US
                                </h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="###" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/villes/img20.jpg" alt="a" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Bergen, Norway
                                </h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="###" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
