import React, { Component } from 'react';

class StarRatingBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            starSelected: 1,
            stars: Array(5).fill(false)
        }
    }

    changeStarSelection() {

    }

    render() {

        return (
            <div className="star-rating-box">
                &#9733;&#9733;&#9733;&#9734;&#9734;
            </div>
        );
    }
}

export default StarRatingBox;