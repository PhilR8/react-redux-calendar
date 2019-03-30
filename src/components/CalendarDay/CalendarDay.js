import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { withStyles } from '@material-ui/core/styles';

import dateFns from 'date-fns';

const styles = theme => ( {
    dayCell: {
        flex: '1 0 13%',
        border: '1px solid lightgray',
        cursor: 'pointer'
    },
    dayCellOutsideMonth: {
        flex: '1 0 13%',
        border: '1px solid lightgray',
        backgroundColor: 'rgba( 211, 211, 211, 0.4 )'
    },
    dateNumber: {
        margin: 5,
        height: '28px',
        width: '28px',
        fontSize: '0.85rem',
        color: '#000',
        backgroundColor: 'transparent'
    },
    todayAvatar: {
        margin: 5,
        height: '28px',
        width: '28px',
        fontSize: '0.85rem',
        color: '#fff',
        backgroundColor: deepPurple[400],
    },
    focusedAvatar: {
        margin: 5,
        height: '28px',
        width: '28px',
        fontSize: '0.85rem',
        color: '#000',
        backgroundColor: '#f1f1f1',
    },
    focusedTodayAvatar: {
        margin: 5,
        height: '28px',
        width: '28px',
        fontSize: '0.85rem',
        color: '#fff',
        backgroundColor: deepPurple[800],
    }, 
    reminder: {
        color: '#000',
        backgroundColor: 'pink'
    }
    
} );

const Reminder = ( props ) => 
    <div className={ props.classes.reminder }>
        <Typography variant='body2'>{ props.reminder.text }</Typography>
    </div>

class CalendarDay extends Component {
    constructor( props ) {
        super( props );

        console.log( this.props.reminders );

        this.state = {
            focused: false
        }
    }

    onMouseOver = () => {
        this.setState( { focused: true } );
    }

    onMouseOut = () => {
        this.setState( { focused: false } );
    }

    onClick = () => {
        console.log( this.props.dateObj.date );
    }

    render() {
        const { classes, dateObj, calendarDate, reminders } = this.props;
        const { focused } = this.state;
        const isToday = dateFns.isToday( dateObj.date );

        const avatarClass = isToday && focused
            ? classes.focusedTodayAvatar
            : isToday
                ? classes.todayAvatar
                : focused
                    ? classes.focusedAvatar
                    : classes.dateNumber;

        return (
            <div 
                onMouseOver={ this.onMouseOver }
                onMouseOut={ this.onMouseOut }
                onClick={ this.onClick }
                className={ 
                    dateFns.isSameMonth( dateObj.date, calendarDate ) 
                        ? classes.dayCell 
                        : classes.dayCellOutsideMonth 
                }
            >
                <Avatar className={ avatarClass }>{ dateFns.getDate( dateObj.date ) }</Avatar>
                { reminders.map( ( reminder, i ) => 
                    <Reminder key={ i } reminder={ reminder } classes={ classes } /> 
                ) }
            </div>
        )
    }
}

CalendarDay.propTypes = {
    classes: PropTypes.object.isRequired,
    calendarDate: PropTypes.instanceOf( Date ),
    dateObj: PropTypes.shape( { date: PropTypes.instanceOf( Date ) } ),
    reminders: PropTypes.array.isRequired
}

export default withStyles( styles )( CalendarDay );
