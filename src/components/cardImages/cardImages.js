import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../sass/style.sass";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default class CardImages extends React.Component {
    render() {
        return (
            <div>
                {/* Row 1 */}
                <div className="row">
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/paysages/img1.jpg" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Mesa Arch, US</h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="#" className="btn btn-primary pr-4 pl-4 text-center">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/paysages/img2.jpg" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Brand, Telfs, Austria</h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="#" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/paysages/img3.jpg" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Shrine Pass Road, US</h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="#" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/paysages/img4.jpg" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Opert, Semnan, Iran</h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="#" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Row 2 */}
                <div className="row">
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/paysages/img5.jpg" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Lake Atitlan, Guatermala</h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="#" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/paysages/img6.jpg" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />North Khorasan Province, Iran</h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="#" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/paysages/img7.jpg" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Reflection Lakes, US</h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="#" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/paysages/img8.jpg" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Atacama Desert, Chine</h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="#" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Row 3 */}
                <div className="row">
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/paysages/img9.jpg" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Aerial River, Iceland</h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="#" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/paysages/img10.jpg" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Aerial View of Beach</h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="#" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/paysages/img11.jpg" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Mountian Village, Italy</h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="#" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/paysages/img12.jpg" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Lac de Moiry, Switzerland</h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="#" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Row 4 */}
                <div className="row">
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/paysages/img13.jpg" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Aerial River, Iceland</h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="#" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/paysages/img14.jpg" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Aerial View of Beach</h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="#" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/paysages/img15.jpg" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Mountian Village, Italy</h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="#" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/paysages/img16.jpg" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Lac de Moiry, Switzerland</h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="#" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Row 5 */}
                <div className="row">
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/paysages/img17.jpg" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Aerial River, Iceland</h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="#" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/paysages/img18.jpg" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Aerial View of Beach</h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="#" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/paysages/img19.jpg" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Mountian Village, Italy</h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="#" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="../../img/paysages/img20.jpg" className="card-img-top border-none" />
                            <div className="card-body bg-dark text-white text-center">
                                <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Lac de Moiry, Switzerland</h5>
                                <h5 className="card-title text-warning">Price : 19.99 $</h5>
                                <a href="#" className="btn btn-primary pr-4 pl-4">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
