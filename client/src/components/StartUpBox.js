import React, { Component } from 'react';

//components
import StaticStarRatingBox from './StaticStarRatingBox';

/**
 * Component StartupBox
 * Custom properts:
 *  startupData: jsonObject
 */


class StartUpBox extends Component {

    constructor(props) {
        super(props);
    }

    displayStaticRating(info) {

        const proposta = info.proposta/info.count;
        const pitch = info.pitch/info.count;
        const desenvolvimento = info.desenvolvimento/info.count;;

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

        const info = this.props.startupData;

        return (
            <div className={this.props.clicked ? 'startup-box--collapsed' : 'startup-box'} onClick={(i) => this.props.onClick(i)}>
                <img src={info.imageUrl} alt={info.name} />
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