import React, { Component } from 'react';
import Ball from './Ball'
import './Lottery.css';

class Lottery extends Component {

    static defaultProps = {
        numBalls: 6,
        maxNumber: 40,
        title: 'Lottery'
    }

    state = {
        nums: Array.from({ length: this.props.numBalls })
    }

    handleClick = () => {
        this.setState(curState => ({
            nums: curState.nums.map(n => Math.floor(Math.random() * this.props.maxNumber) + 1)
        }))
    }

    render() {
        return (
            <div className="Lottery">
                <h1>{this.props.title}</h1>
                {this.state.nums.map(n => {
                    return <Ball num={n} key={Math.random()} />
                })}
                <button onClick={this.handleClick}>Generate</button>
            </div>
        );
    }
}

export default Lottery;