import React, { Component } from 'react';
import imgTest from '../images/test.jpg';

class StartUpBox extends Component {
    render() {

        const name = "Startup Name";
        const segment = "Segment";

        return (
            <div className="startup-box cols-sm-3">
                <img src={imgTest} alt="teste"/>
                <div className="startup-box-name">
                    {name}
                </div>
                <div className="startup-box-segment">
                    {segment}
                </div>
            </div>
        );
    }
}

export default StartUpBox;