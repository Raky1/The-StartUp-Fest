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
        const startups = this.props.startups;

        const rakingDisplay = Array(this.props.size).fill(null);
        const rating = this.props.startupsRating;
        const category = this.props.category;

        startups.map(startup => {

            if (rating[startup.name]) {

                const ratingValue = rating[startup.name][category]/rating[startup.name].count;

                for (let i = 0; i < rakingDisplay.length; i++) {
                    if(rakingDisplay[i]) {
                        if (rakingDisplay[i].rating < ratingValue) {
                            rakingDisplay[i] = startup;
                            rakingDisplay[i].rating = ratingValue;
                            break;
                        }
                    } else {
                        rakingDisplay[i] = startup;
                        rakingDisplay[i].rating = ratingValue;
                        break;
                    }
                }
            }

            return null;
        });

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