import React, { Component } from 'react';

//components
import StartUpRatingBox from './StartUpRatingBox';

class StartUpRatingList extends Component {

    render() {

        return (
            <div className="App-startup-list">
                <StartUpRatingBox />
                <StartUpRatingBox />
                <StartUpRatingBox />
            </div>
        );
    }
}

export default StartUpRatingList;