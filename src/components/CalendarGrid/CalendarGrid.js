import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import CalendarDayContainer from '../CalendarDay/CalendarDayContainer';

import { daysArr, getMonthCells } from '../../utils/dateUtils';

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
    monthContainer: {
        display: 'flex',
        width: '100%',
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        border: '1px solid lightgray'
    }
} );

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

const MonthContainer = ( props ) => 
    <div className={ props.classes.monthContainer }>
        { props.calendarCells.map( ( dateObj, i ) =>
            <CalendarDayContainer key={ i } calendarDate={ props.date } dateObj={ dateObj } />
        ) }
    </div>

MonthContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    date: PropTypes.instanceOf( Date ).isRequired,
    calendarCells: PropTypes.arrayOf( PropTypes.shape( { date: PropTypes.instanceOf( Date ) } ) )
}

class CalendarGrid extends Component {
    render() {
        const { classes, date } = this.props;
        const calendarCells = getMonthCells( this.props.date );
        return (
            <div className={ classes.calendarGrid }>
                <DaysRow classes={ classes } />
                <MonthContainer 
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
