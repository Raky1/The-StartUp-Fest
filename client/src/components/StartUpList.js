import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

//components
import StartUpBox from './StartUpBox';

// graphql query
const getAllStartups = gql`
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
`

class StartUpList extends Component {

    displayStartup() {
        let data = this.props.data;
        if (data.loading) {
            return(<h3>Loading...</h3>);
        } else {
            return data.allStartups.map((startup, i) => {
                return (
                    <StartUpBox key={i} startupData={startup} />
                );
            });
        }

    }

    render() {

        return (
            <div className="App-startup-list row">
                {this.displayStartup()}
            </div>
        );
    }
}

export default graphql(getAllStartups)(StartUpList);