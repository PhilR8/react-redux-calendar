import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { withStyles } from '@material-ui/core/styles';

import dateFns from 'date-fns';

const styles = theme => ( {
    dayCell: {
        flex: '1 0 13%',
        border: '1px solid lightgray'
    },
    dayCellOutsideMonth: {
        flex: '1 0 13%',
        border: '1px solid lightgray',
        backgroundColor: 'rgba( 211, 211, 211, 0.4 )'
    },
    dateNumber: {
        margin: 10,
        height: '23px',
        width: '23px',
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
        backgroundColor: deepPurple[500],
    }
    
} );

class CalendarDay extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const { classes, dateObj, calendarDate } = this.props;
        return (
            <div 
                className={ 
                    dateFns.isSameMonth( dateObj.date, calendarDate ) 
                        ? classes.dayCell 
                        : classes.dayCellOutsideMonth 
                }
            >
                { dateFns.isToday( dateObj.date ) 
                    ? <Avatar className={ classes.todayAvatar }>{ dateFns.getDate( dateObj.date ) }</Avatar>
                    : <Avatar className={ classes.dateNumber }>{ dateFns.getDate( dateObj.date ) }</Avatar>
                }
            </div>
        )
    }
}

CalendarDay.propTypes = {
    classes: PropTypes.object.isRequired,
    calendarDate: PropTypes.instanceOf( Date ),
    dateObj: PropTypes.shape( { date: PropTypes.instanceOf( Date ) } ) 
}

export default withStyles( styles )( CalendarDay );
