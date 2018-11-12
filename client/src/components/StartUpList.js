import React, { Component } from 'react';

//components
import StartUpBox from './StartUpBox';

class StartUpList extends Component {

    render() {

        return (
            <div className="App-startup-list row">
                <StartUpBox />
                <StartUpBox />
                <StartUpBox />
                <StartUpBox />
                <StartUpBox />
            </div>
        );
    }
}

export default StartUpList;