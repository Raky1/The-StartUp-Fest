import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAllStartups } from '../utils/apolloUtils';

//components
import StartUpBox from './StartUpBox';

/**
 * Manager component of list of startups
 * Custom properts:
 *  startupRating: array
 *  data: from apollo
 */
class StartUpList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: -1 //startupbox selected - for collapse
        }
    }

    //click function of box
    handleClick(i) {
        if(this.state.selected === i) return;
        this.setState({
            selected: i
        });
    }

    //display startups box
    displayStartup() {
        const data = this.props.data;
        
        //verify if data is loaded
        if (data.loading) {
            return(<h3>Carregando...</h3>);
        } else {

            const rating = this.props.startupsRating;

            return data.allStartups.map((startup, i) => {

                const clicked = (i === this.state.selected);

                //add rating values to startup data
                if (rating[startup.name]) {
                    startup.proposta = rating[startup.name].proposta;
                    startup.pitch = rating[startup.name].pitch;
                    startup.desenvolvimento = rating[startup.name].desenvolvimento;
                    startup.count = rating[startup.name].count;
                } else {
                    startup.proposta = 1;
                    startup.pitch = 1;
                    startup.desenvolvimento = 1;
                    startup.count = 1;
                }
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