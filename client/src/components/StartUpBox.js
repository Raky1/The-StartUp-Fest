import React, { Component } from 'react';
import { firebaseDatabase } from '../utils/firebaseUtils';

//components
import StaticStarRatingBox from './StaticStarRatingBox';
import DinamicStarRatingBox from './DinamicStarRatingBox';

/**
 * Component StartupBox
 * Custom properts:
 *  componentId: number
 *  startupData: jsonObject
 */


class StartUpBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            votingMode: false,
            starSelected: Array(3).fill(1)
        }
    }

    //manage start click
    clickHandler(rating, star) {

        const newStarSelection = this.state.starSelected.slice();

        newStarSelection[star] = rating;

        this.setState({
            starSelected: newStarSelection
        });
    }

    clickVote() {

        if(this.state.votingMode) {

            firebaseDatabase.collection('StartUps').add({
                startup: this.props.startupData.name,
                proposta: this.state.starSelected[0],
                pitch: this.state.starSelected[1],
                desenvolvimento: this.state.starSelected[2]
            });

            this.setState({
                starSelected: Array(3).fill(1)
            });
        }

        this.setState({
            votingMode: !this.state.votingMode
        });
    }

    clickVoteCancel() {
        this.setState({
            votingMode: false
        });
    }

    displayStaticRating(info) {

        if(this.state.votingMode) {
            const proposta = this.state.starSelected[0];
            const pitch = this.state.starSelected[1];
            const desenvolvimento = this.state.starSelected[2];

            return(
                <div>
                    <div className="startup-box-rating-box">
                        Proposta
                        <DinamicStarRatingBox displayNumber={true} rating={proposta} onClick={(rating) => this.clickHandler(rating, 0)}/>
                    </div>
    
                    <div className="startup-box-rating-box">
                        Apresentação/Pitch
                        <DinamicStarRatingBox displayNumber={true} rating={pitch} onClick={(rating) => this.clickHandler(rating, 1)}/>
                    </div>
    
                    <div className="startup-box-rating-box">
                        Desenvolvimento
                        <DinamicStarRatingBox displayNumber={true} rating={desenvolvimento} onClick={(rating) => this.clickHandler(rating, 2)}/>
                    </div>
    
                    <button onClick={() => this.clickVote()}>Finalizar</button>
                    <button className="btn-cancel" onClick={() => this.clickVoteCancel()}>Cancelar</button>
                </div>
            );
            
        } else {
            const proposta = info.proposta/info.count;
            const pitch = info.pitch/info.count;
            const desenvolvimento = info.desenvolvimento/info.count;

            return(
                <div>
                    <div className="startup-box-rating-box">
                        Proposta
                        <StaticStarRatingBox displayNumber={true} rating={proposta}/>
                    </div>
    
                    <div className="startup-box-rating-box">
                        Apresentação/Pitch
                        <StaticStarRatingBox displayNumber={true} rating={pitch}/>
                    </div>
    
                    <div className="startup-box-rating-box">
                        Desenvolvimento
                        <StaticStarRatingBox displayNumber={true} rating={desenvolvimento}/>
                    </div>
    
                    <button onClick={() => this.clickVote()}>Vote!</button>
                </div>
            );
        }

    }

    render() {

        const info = this.props.startupData;
        const id = this.props.componentId;

        return (
            <div 
                className={this.props.clicked ? 'startup-box--collapsed' : 'startup-box'} 
                onClick={this.props.clicked ? () => {} : () => this.props.onClick(id)}
            >

                <img src={info.imageUrl} alt={info.name} onClick={this.props.clicked ? () => this.props.onClick(-1) : () => {}} />
                <div className="startup-box-name">
                    {info.name}
                </div>
                <div className="startup-box-segment">
                    {info.Segment.name}
                </div>

                <div className="startup-box-description">
                    {info.description}
                </div>

                {this.displayStaticRating(info)}
            </div>
        );
    }
}

export default StartUpBox;