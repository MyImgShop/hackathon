import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

export default class Panier extends React.Component {
    render() {
        return (
            <div>
                <div className="contact">
                    <form action="">
                        <h1 className="text-center">Mon Panier <FontAwesomeIcon icon={faShoppingBag} className="ml-4"/></h1>
                        <hr className="bg-dark w-25"/>
                        <div className="row">
                            <div className="col-6">
                                <div className="form">
                                    
                                </div>
                            </div>
                            <div className="col-6">
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}