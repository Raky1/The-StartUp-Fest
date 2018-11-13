import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAllStartups } from '../utils/apolloUtils';

//components
import StartUpRatingBox from './StartUpRatingBox';

/**
 * Manager component of list of startups rating
 * Custom properts:
 *  startupRating: array
 *  category: string
 */

class StartUpRatingList extends Component {

    displayRanking() {
        const data = this.props.data;

        //verify if data is loaded
        if(data.loading) {
            return(<h4>Carregando...</h4>);
        } else {

            const rating = this.props.startupsRating;
            const category = this.props.category;
            let startup1 = null;
            let startup2 = null;
            let startup3 = null;

            data.allStartups.map(startup => {

                if (rating[startup.name]) {

                    let ratingValue = rating[startup.name][category]/rating[startup.name].count;

                    if(startup1) {
                        if (startup1.rating < ratingValue) {
                            startup1 = startup;
                            startup1.rating = ratingValue;
                        } else {
                            if(startup2) {
                                if (startup2.rating < ratingValue) {
                                    startup2 = startup;
                                    startup2.rating = ratingValue;
                                } else {
                                    if(startup3) {
                                        if (startup3.rating < ratingValue) {
                                            startup3 = startup;
                                            startup3.rating = ratingValue;
                                        }
                                    } else {
                                        startup3 = startup;
                                        startup3.rating = ratingValue;
                                    }
                                }
                            } else {
                                startup2 = startup;
                                startup2.rating = ratingValue;
                            }
                        }
                    } else {
                        startup1 = startup;
                        startup1.rating = ratingValue;
                    }
                }

                return null;
            });

            return (
                <div>
                    {(startup1 ?
                        <StartUpRatingBox startupData={startup1} rankingNumber={1}/> : ''
                    )}
                    {(startup2 ?
                        <StartUpRatingBox startupData={startup2} rankingNumber={2}/> : ''
                    )}
                    {(startup3 ?
                        <StartUpRatingBox startupData={startup3} rankingNumber={3}/> : ''
                    )}
                </div>
            )

        }
    }

    render() {
        return this.displayRanking();
    }
}

export default graphql(getAllStartups)(StartUpRatingList);