import React, { Component } from 'react';

//components
import StaticStarRatingBox from './StaticStarRatingBox';

/**
 * Component StartUpRatingBox
 * Custom properts:
 *  startup: array
 *  rankingNumber: number
 */

class StartUpBox extends Component {
    render() {

        const startup = this.props.startup;
        const ranking = this.props.rankingNumber;

        return (
            <div className="startup-rating-box">
                <div className="row" >
                    <div className="startup-rating-box-position col-2">
                        {ranking}º
                    </div>
                    <div className="col-4">
                        <img src={startup.imageUrl} alt={startup.name}/>
                    </div>
                    <div className="Rating-box-startup col-6">
                        <div className="startup-rating-box-name">
                            {startup.name}
                        </div>
                        <div className="startup-rating-box-segment">
                            {startup.Segment.name}
                        </div>
                        <StaticStarRatingBox rating={startup.rating} displayNumber={true}/>
                    </div>
                </div>                
            </div>
        );
    }
}

export default StartUpBox;