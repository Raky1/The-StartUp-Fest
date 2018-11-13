import React, { Component } from 'react';
import { firebaseDatabase } from '../utils/firebaseUtils';

//components
import StaticStarRatingBox from './StaticStarRatingBox';

class StartUpBox extends Component {

    constructor(props) {
        super(props);

        //setup startup info
        this.state = {
            name: this.props.startupData.name,
            segment: this.props.startupData.Segment.name,
            imgUrl: this.props.startupData.imageUrl,

            description: this.props.startupData.description,
            proposta: 1,
            pitch: 1,
            desenvolvimento: 1
        };

        firebaseDatabase.collection('StartUps').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                this.setState({
                    proposta: doc.data().proposta,
                    pitch: doc.data().pitch,
                    desenvolvimento: doc.data().desenvolvimento
                });
            });
        });
    }

    displayStaticRating() {

        const proposta = this.state.proposta;
        const pitch = this.state.pitch;
        const desenvolvimento = this.state.desenvolvimento;

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

                <button>Vote!</button>
            </div>
        );
    }

    render() {

        return (
            <div className={this.props.clicked ? 'startup-box--collapsed' : 'startup-box'} onClick={(i) => this.props.onClick(i)}>
                <img src={this.state.imgUrl} alt={this.state.name} />
                <div className="startup-box-name">
                    {this.state.name}
                </div>
                <div className="startup-box-segment">
                    {this.state.segment}
                </div>

                <div className="startup-box-description">
                    {this.state.description}
                </div>

                {this.displayStaticRating()}
            </div>
        );
    }
}

export default StartUpBox;