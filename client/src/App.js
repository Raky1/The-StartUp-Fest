import React, { Component } from 'react';
import './css/App.css';

//components
import StartUpList from './components/StartUpList';
import StartUpRatingList from './components/StartUpRatingList';

class App extends Component {
  render() {
    
    //title
    const titleApp = "The StartUp Fest";

    return (
      <div className="App">

        <header className="App-header">
          <h1>{titleApp}</h1>
        </header>

        <div className="App-content">
          <StartUpList/>
          <div className="Rating-content row">
            <div className="Rating-list col-sm">
              <h3>Proposta</h3>
              <StartUpRatingList/>
            </div>
            <div className="Rating-list col-sm">
              <h3>Apresentação/Pitch</h3>
              <StartUpRatingList/>
            </div>
            <div className="Rating-list col-sm">
              <h3>Desenvolvimento</h3>
              <StartUpRatingList/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
