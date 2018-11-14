import React, { Component } from 'react';

//components
import StartUpRatingBox from './StartUpRatingBox';

/**
 * Manager component of list of startups rating
 * Custom properts:
 *  startups: jsonObject
 *  startupRating: array
 *  category: string
 *  size: number
 */

class StartUpRatingList extends Component {

    displayRanking() {
        const startups = this.props.startups.slice();//copy

        const size = this.props.size;

        const rakingDisplay = Array(size).fill(null);
        const rating = this.props.startupsRating;
        const category = this.props.category;

        startups.sort((a, b) => {
            let value_a = rating[a.name][category]/rating[a.name].count;
            let value_b = rating[b.name][category]/rating[b.name].count;
            return value_b-value_a;
        });

        for(let i = 0; i < size; i++) {
            rakingDisplay[i] = startups[i];
            rakingDisplay[i].rating = rating[startups[i].name][category]/rating[startups[i].name].count;
        }

        return (
            <div>
                {rakingDisplay.map((startup, i) => {
                    if(startup)
                        return (<StartUpRatingBox key={i} startup={startup} rankingNumber={i+1}/>);
                    else
                        return '';
                })}
            </div>
        );
    }

    render() {
        return this.displayRanking();
    }
}

export default StartUpRatingList;