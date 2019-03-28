import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

class App extends Component {
    constructor( props ) {
        super( props );
        this.state = { date: new Date() };
    }

    compnentDidMount() {
        
    }

    render() {
        const month = this.state.date.toLocaleString( 'en-us', { month: 'long' } );
        const year = this.state.date.getFullYear();
        return (
            <div className="App">
                <header className="App-header">
                    <Typography component="h2" variant="h1" gutterBottom>
                        { month } { year }
                    </Typography>               
                </header>
            </div>
        );
    }
}

App.propTypes = {
    date: PropTypes.instanceOf( Date )
}

export default App;
