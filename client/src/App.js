import React, { Component } from 'react';
import './css/App.css';
import { client } from './utils/apolloUtils';
import { ApolloProvider } from 'react-apollo';

//Components
import AppContent from './AppContent';


//app class
/**
 * Main Component
 */
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
            <AppContent />
        </ApolloProvider>

        <footer className="App-footer">
          {madeby}
        </footer>

      </div>
    );
  }
}

export default App;
