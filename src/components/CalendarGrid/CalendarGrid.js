import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import dateFns from 'date-fns';

import { daysArr, monthsArr, getMonthGrid } from '../../utils/dateUtils';

const styles = theme => ( {
    calendarGrid: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    daysRow: {
        display: 'flex',
        width: '100%',
        flexBasis: '50px',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    monthGrid: {
        display: 'flex',
        width: '100%',
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        border: '1px solid lightgray'
    },
    dayCell: {
        flex: '1 0 13%',
        border: '1px solid lightgray'
    },
    dayCellOutsideMonth: {
        flex: '1 0 13%',
        border: '1px solid lightgray',
        backgroundColor: 'rgba( 211, 211, 211, 0.4 )'
    }
} );

const DayCell = ( props ) => 
    <div 
        className={ dateFns.isThisMonth( props.dateObj.date ) ? props.classes.dayCell : props.classes.dayCellOutsideMonth }
    >
        { dateFns.getDate( props.dateObj.date ) }
    </div>;

DayCell.propTypes = {
    classes: PropTypes.object.isRequired,
    dateObj: PropTypes.shape( { date: PropTypes.instanceOf( Date ) } ) 
}

const DayName = ( props ) => <Typography variant="h6">{ props.day }</Typography>;

DayName.propTypes = {
    classes: PropTypes.object.isRequired,
    day: PropTypes.string.isRequired
}

const DaysRow = ( props ) =>
    <div className={ props.classes.daysRow }>
        { daysArr.map( ( day, i ) =>
            <DayName classes={ props.classes } key={ i } day={ day } /> 
        ) }
    </div>

DaysRow.propTypes = {
    classes: PropTypes.object.isRequired
}

class MonthGrid extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const { classes, date, calendarCells } = this.props;
        return (
            <div className={ classes.monthGrid }>
                { calendarCells.map( ( dateObj, i ) =>
                    <DayCell key={ i } classes={ classes } dateObj={ dateObj } />
                ) }
            </div>
        )
    }
}

MonthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
    date: PropTypes.instanceOf( Date ).isRequired,
    calendarCells: PropTypes.arrayOf( PropTypes.shape( { date: PropTypes.instanceOf( Date ) } ) )
}

class CalendarGrid extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const { classes, date } = this.props;
        const calendarCells = getMonthGrid( this.props.date );
        return (
            <div className={ classes.calendarGrid }>
                <DaysRow classes={ classes } />
                <MonthGrid 
                    classes={ classes } 
                    date={ date }
                    calendarCells={ calendarCells }
                />
            </div>
        )
    }
}

CalendarGrid.propTypes = {
    classes: PropTypes.object.isRequired,
    date: PropTypes.instanceOf( Date ).isRequired
}

export default withStyles( styles )( CalendarGrid );
