import React, { Component } from 'react';

//components
import StarRatingBox from './StarRatingBox';
import imgTest from '../images/test.jpg';

class StartUpBox extends Component {
    render() {

        const name = "Startup Name";
        const segment = "Segment";

        return (
            <div className="startup-rating-box">
                <div className="row" >
                    <div className="startup-rating-box-position col-2">
                        1º
                    </div>
                    <div className="col-4">
                        <img src={imgTest} alt="teste"/>
                    </div>
                    <div className="Rating-box-info col-6">
                        <div className="startup-rating-box-name">
                            {name}
                        </div>
                        <div className="startup-rating-box-segment">
                            {segment}
                        </div>
                        <StarRatingBox />
                    </div>
                </div>                
            </div>
        );
    }
}

export default StartUpBox;