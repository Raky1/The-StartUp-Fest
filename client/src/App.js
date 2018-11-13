import React, { Component } from 'react';
import './css/App.css';
import { client } from './utils/apolloUtils';
import { ApolloProvider } from 'react-apollo';

//components
import StartUpList from './components/StartUpList';
import StartUpRatingList from './components/StartUpRatingList';


//app class
class App extends Component {

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

          <StartUpList/>

          <div className="App-rating-content row">

            <div className="App-rating-list col-sm">
              <h3>Proposta</h3>
              <StartUpRatingList/>
            </div>
            <div className="App-rating-list col-sm">
              <h3>Apresentação/Pitch</h3>
              <StartUpRatingList/>
            </div>
            <div className="App-rating-list col-sm">
              <h3>Desenvolvimento</h3>
              <StartUpRatingList/>
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
