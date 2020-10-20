import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
            <div className="d-flex flex-column p-4 ">
                <div className="row">
                    <div className="col-4 p-2 mx-auto bg-dark text-white">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae provident fugiat expedita minima, ullam fugit ipsam rerum laborum dolor quaerat. Quidem id enim quisquam vel!</p>
                    </div>
                    <div className="col-4 p-2 mx-auto bg-dark text-white">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolore.</p>
                    </div>
                    <div className="col-4 p-2 mx-auto bg-dark text-white">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <p className="bg-danger text-center"> &:copy Mouad &:copy Karis, &:copy Liam </p>
            </div>
        )   
    }
}