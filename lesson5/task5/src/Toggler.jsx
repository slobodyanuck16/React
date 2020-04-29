import React, { Component } from "react";

class Toggler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turn: 'Off',
            isOn: false
        }
    }
    turnButton = () => {
        if(this.state.isOn === false) {
            this.setState({
                turn: this.state.turn = 'On',
                isOn: this.state.isOn = true
            })
        } else { this.setState({
            turn: this.state.turn = 'Off',
            isOn: this.state.isOn = false
        })};
    };

    render() {
        return (
                <button
                    onClick={() => this.turnButton()}
                    className="toggler"
                >{this.state.turn}</button>
        );
    }
}

export default Toggler;
