import React, { Component, Fragment } from 'react';
import './RollDice.css';
import Die from './Die';

class RollDice extends Component {
    state = { die1: "one", die2: "one", isRolling: false }
    rollNow = () => {
        const sides = ['one', 'two', 'three', 'four', 'five', 'six']
        const newDie1 = sides[Math.floor(Math.random() * sides.length)]
        const newDie2 = sides[Math.floor(Math.random() * sides.length)]
        this.setState({ die1: newDie1, die2: newDie2, isRolling: true })
        setTimeout(() => this.setState({ isRolling: false }), 1000)
    }
    render() {
        return (
            <Fragment>
                <div>
                    <Die face={this.state.die1} wobble={this.state.isRolling} />
                    <Die face={this.state.die2} wobble={this.state.isRolling} />
                </div>
                <button
                    onClick={this.rollNow}
                    disabled={this.state.isRolling}
                    className={this.state.isRolling ? 'cursor-disabled' : 'cursor-pointer'}
                >
                    {this.state.isRolling ? 'Rolling ...' : 'Roll Dice !'}
                </button>
            </Fragment>
        );
    }
}

export default RollDice;