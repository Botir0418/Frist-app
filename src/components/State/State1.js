import React from 'react';

class State1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Botir',
            age: 20,
            job:'Frontend Developer'
        };
    }

    render() {
        return (
            <div>
                <h1>Hi my name is {this.state.name}. I'm {this.state.age} years old.My job {this.state.job}</h1>
            </div>
        );
    }
}

export default State1;
