import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import './App.css';

const styles = theme => ( {
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    calendar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        margin: '25px',
        width: '100%',
        height: '90%'
    },
    calendarHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '150px'
    },
    calendarGrid: {
        display: 'flex',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flex: 1
    }
} )

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

        const { classes } = this.props;
        return (
            <div className={ classes.root }>
                <Paper className={ classes.calendar }>
                    <header className={ classes.calendarHeader }>
                        <Typography component="h2" variant="h1">
                            { month } { year }
                        </Typography>               
                    </header>
                    <div className={ classes.calendarGrid }>test</div>
                </Paper>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles( styles )( App );
