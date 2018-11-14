import React, { Component } from 'react';
import { firebaseDatabase } from './utils/firebaseUtils';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

//Components
import StartUpList from './components/StartUpList';
import StartUpRatingList from './components/StartUpRatingList';

/**
 * Component AppContent
 */

class AppContent extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          startupsRating: []
        };
    
        this.updateRatingFromDatabase();
    }

    updateRatingFromDatabase() {
        //get rating data from firebase and setup in state
        firebaseDatabase.collection('StartUps').get().then(snapshot => {

            let startupsRating = [];

            snapshot.docs.forEach(doc => {
                let data = doc.data();

                //verify if exists
                if(startupsRating[data.startup]) {

                    //sum data
                    startupsRating[data.startup].count += 1;
                    startupsRating[data.startup].proposta += data.proposta;
                    startupsRating[data.startup].pitch += data.pitch;
                    startupsRating[data.startup].desenvolvimento += data.desenvolvimento;

                } else {
                    //add new
                    startupsRating[data.startup] = {
                        proposta: data.proposta,
                        pitch: data.pitch,
                        desenvolvimento: data.desenvolvimento,
                        count: 1
                    }
                }
            });

            this.setState({
                startupsRating: startupsRating
            });
        });
    }

    render() {
        return(
            <Query query={gql`
                query GetAllStartups {
                    allStartups {
                        name
                        description
                        imageUrl
                        Segment {
                            name
                        }
                    }
                }
            `}
            >
                {({loading, error, data}) => {

                    if(loading) return <p>Carregando...</p>
                    if(error) return <p>Erro...</p>

                    return (
                        <div className="App-content">
                            <StartUpList 
                                startups={data.allStartups}
                                startupsRating={this.state.startupsRating}
                                updateRatingFromDatabase={() => this.updateRatingFromDatabase()} />

                            <div className="App-rating-content row">

                                <div className="App-rating-list col-sm">
                                    <h3>Proposta</h3>
                                    <StartUpRatingList
                                        startups={data.allStartups}
                                        startupsRating={this.state.startupsRating}
                                        category={'proposta'}
                                        size={3} />
                                </div>

                                <div className="App-rating-list col-sm">
                                    <h3>Apresentação/Pitch</h3>
                                    <StartUpRatingList
                                        startups={data.allStartups}
                                        startupsRating={this.state.startupsRating}
                                        category={'pitch'}
                                        size={3} />
                                </div>

                                <div className="App-rating-list col-sm">
                                    <h3>Desenvolvimento</h3>
                                    <StartUpRatingList
                                        startups={data.allStartups}
                                        startupsRating={this.state.startupsRating}
                                        category={'desenvolvimento'}
                                        size={3} />
                                </div>

                            </div>
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default AppContent;