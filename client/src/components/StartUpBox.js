import React, { Component } from 'react';

class StartUpBox extends Component {

    constructor(props) {
        super(props);

        //setup startup info
        this.state = {
            name: this.props.startupData.name,
            segment: this.props.startupData.Segment.name,
            imgUrl: this.props.startupData.imageUrl
        };
    }

    render() {
        return (
            <div className="startup-box cols-sm-3">
                <img src={this.state.imgUrl} alt={this.state.name}/>
                <div className="startup-box-name">
                    {this.state.name}
                </div>
                <div className="startup-box-segment">
                    {this.state.segment}
                </div>
            </div>
        );
    }
}

export default StartUpBox;