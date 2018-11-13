import React, { Component } from 'react';

/**
 * Component DinamicStarRatingBox
 * Custom properts:
 *  rating: number
 *  displayNumber: bool
 */

class StaticStarRatingBox extends Component {

    displayStars(rating) {
        const stars = [];

        for(let i = 1; i <= 5; i++) {
            if(rating >= i)
                stars.push(<span key={i}>&#9733;</span>);
            else
                stars.push(<span key={i}>&#9734;</span>);
        }

        return (
            <div>{stars}</div>
        );
    }

    render() {
        const rating = this.props.rating;

        return (
            <div className="static-star-rating-box">
                {this.displayStars(rating)}{(this.props.displayNumber ? Math.round(rating*10)/10+'/5' : '')}
            </div>
        );
    }
}

export default StaticStarRatingBox;