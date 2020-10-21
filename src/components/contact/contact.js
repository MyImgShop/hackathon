import React from "react";

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <div className="contact">
                    <form action="">
                        <h1 className="text-center">Contact us</h1>
                        <div className="row">
                            <div className="col-6">
                                <div className="form">
                                    <label htmlFor="">Nom : </label>
                                    <input type="text" />
                                    <label htmlFor="">Prenom : </label>
                                    <input type="text" />
                                    <label htmlFor="">Email Address</label>
                                    <input type="email" name="" id="" />
                                    <label htmlFor="">Phone Number : </label>
                                    <input type="text" />
                                    <label htmlFor="">Message : </label>
                                    <textarea name="" id="" cols="2" rows="3"></textarea>
                                    <button type="submit">confirm</button>
                                </div>
                            </div>
                            <div className="col-6">
                                <img className="contactImg" src="img/robot.gif" alt=""/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}