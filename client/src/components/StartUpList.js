import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAllStartups } from '../utils/apolloUtils';

//components
import StartUpBox from './StartUpBox';

class StartUpList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: -1
        }
    }

    handleClick(i) {
        if(this.state.selected === i) return;
        this.setState({
            selected: i
        });
    }

    //display startups boxs
    displayStartup() {
        const data = this.props.data;
        
        if (data.loading) {
            return(<h3>Loading...</h3>);
        } else {
            return data.allStartups.map((startup, i) => {

                const clicked = (i === this.state.selected);

                return (
                    <div key={'div'+i} className="startup-box-col col-sm">
                        <StartUpBox key={i} startupData={startup} clicked={clicked} onClick={() => this.handleClick(i)}/>
                    </div>
                );
            });
        }
    }

    render() {

        //render startup
        return (
            <div className="App-startup-list row">
                {this.displayStartup()}
            </div>
        );
    }
}

export default graphql(getAllStartups)(StartUpList);