import React, { Component } from 'react';

//components
import StaticStarRatingBox from './StaticStarRatingBox';

class StartUpBox extends Component {
    render() {

        const info = this.props.startupData;
        const rating = this.props.rating;
        const ranking = this.props.rankingNumber;

        console.log(info.name, rating);

        return (
            <div className="startup-rating-box">
                <div className="row" >
                    <div className="startup-rating-box-position col-2">
                        {ranking}º
                    </div>
                    <div className="col-4">
                        <img src={info.imageUrl} alt={info.name}/>
                    </div>
                    <div className="Rating-box-info col-6">
                        <div className="startup-rating-box-name">
                            {info.name}
                        </div>
                        <div className="startup-rating-box-segment">
                            {info.Segment.name}
                        </div>
                        <StaticStarRatingBox rating={rating/info.count} displayNumber={true}/>
                    </div>
                </div>                
            </div>
        );
    }
}

export default StartUpBox;