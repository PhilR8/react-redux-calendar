import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import startOfMonth from 'date-fns/start_of_month';
import getDaysInMonth from 'date-fns/get_days_in_month';

import CalendarGrid from '../CalendarGrid/CalendarGrid';

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
    }
} )

class App extends Component {
    constructor( props ) {
        super( props );

        const date = new Date();
        const year = date.getFullYear();
        const firstDayOfMonth = startOfMonth( date ).getDay();
        const daysInMonth = getDaysInMonth( date );
        const weeksToRender = Math.ceil( ( daysInMonth + firstDayOfMonth ) / 7 );

        this.state = { 
            date, 
            month: date.toLocaleString( 'en-us', { month: 'long' } ),
            year,
            firstDayOfMonth,
            daysInMonth,
            weeksToRender
        };
    }

    compnentDidMount() {
        
    }

    render() {
        const { classes } = this.props;
        const { date, firstDayOfMonth, daysInMonth, weeksToRender } = this.state;
        return (
            <div className={ classes.root }>
                <Paper className={ classes.calendar }>
                    <header className={ classes.calendarHeader }>
                        <Typography component="h2" variant="h1">
                            { this.state.month } { this.state.year }
                        </Typography>               
                    </header>
                    <CalendarGrid 
                        date={ date } 
                        firstDayOfMonth={ firstDayOfMonth }
                        daysInMonth={ daysInMonth }
                        weeksToRender={ weeksToRender }
                    />
                </Paper>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles( styles )( App );
