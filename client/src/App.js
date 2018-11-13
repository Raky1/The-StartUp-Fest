import React, { Component } from 'react';
import './css/App.css';
import { firebaseDatabase } from './utils/firebaseUtils';
import { client } from './utils/apolloUtils';
import { ApolloProvider } from 'react-apollo';

//components
import StartUpList from './components/StartUpList';
import StartUpRatingList from './components/StartUpRatingList';


//app class
/**
 * Main Component
 */
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      startUpsRating: []
    };

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
        startUpsRating: startupsRating
      });
    });
  }

  render() {
    
    //title
    const titleApp = "The StartUp Fest";
    const madeby = "Criado por Rafael";

    return (
      <div className="App">

        <header className="App-header">
          <h1>{titleApp}</h1>
        </header>

        <ApolloProvider client={client}>
        
        <div className="App-content">

          <StartUpList startupsRating={this.state.startUpsRating}/>

          <div className="App-rating-content row">
            <h3>Ranking</h3>

            <div className="App-rating-list col-sm">
              <h3>Proposta</h3>
              <StartUpRatingList startupsRating={this.state.startUpsRating} category={'proposta'} />
            </div>
            <div className="App-rating-list col-sm">
              <h3>Apresentação/Pitch</h3>
              <StartUpRatingList startupsRating={this.state.startUpsRating} category={'pitch'}/>
            </div>
            <div className="App-rating-list col-sm">
              <h3>Desenvolvimento</h3>
              <StartUpRatingList startupsRating={this.state.startUpsRating} category={'desenvolvimento'}/>
            </div>

          </div>
        </div>

        </ApolloProvider>

        <footer className="App-footer">
          {madeby}
        </footer>

      </div>
    );
  }
}

export default App;
