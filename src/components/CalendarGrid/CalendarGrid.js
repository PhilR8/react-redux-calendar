import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { daysArr, monthsArr, dateFns } from '../../utils/dateFns';

const styles = theme => ( {
    calendarGrid: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        border: '1px solid lightgray'
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
        flexGrow: 1
    }
} );

const DayHeader = ( props ) => <Typography variant="h6">{ props.day }</Typography>;

DayHeader.propTypes = {
    day: PropTypes.string.isRequired
}

const DaysRow = ( props ) =>
    <div className={ props.classes.daysRow }>
        { daysArr.map( ( day, i ) =>
            <DayHeader classes={ props.classes } key={ i } day={ day } /> 
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
        const { classes } = this.props;
        return (
            <div className={ classes.monthGrid }></div>
        )
    }
}

MonthGrid.propTypes = {
    classes: PropTypes.object.isRequired
}

class CalendarGrid extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={ classes.calendarGrid }>
                <DaysRow classes={ classes } />
                <MonthGrid classes={ classes } />
            </div>
        )
    }
}

CalendarGrid.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles( styles )( CalendarGrid );
