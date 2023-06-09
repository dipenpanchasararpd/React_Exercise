import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incriment() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <div>
                    count - {this.state.count}
                </div>
                <button onClick={() => this.incriment()}>Incriment</button>
            </div>

        );
    }
}

export default Counter