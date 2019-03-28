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
        flexWrap: 'wrap'
    },
    dayCell: {
        flex: '1 0 12%',
        border: '3px solid red'
        
    }
} );

const DayCell = ( props ) => <div className={ props.classes.dayCell}>Test</div>;

DayCell.propTypes = {
    classes: PropTypes.object.isRequired
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
        console.log( this.props );
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={ classes.monthGrid }>
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />

                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />

                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />

                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />

                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />

                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />
                <DayCell classes={ classes } />

            </div>
        )
    }
}

MonthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
    firstDayOfMonth: PropTypes.number.isRequired,
    daysInMonth: PropTypes.number.isRequired,
    weeksToRender: PropTypes.number.isRequired
}

class CalendarGrid extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const { classes, firstDayOfMonth, daysInMonth, weeksToRender } = this.props;
        return (
            <div className={ classes.calendarGrid }>
                <DaysRow classes={ classes } />
                <MonthGrid 
                    classes={ classes } 
                    firstDayOfMonth={ firstDayOfMonth }
                    daysInMonth={ daysInMonth }
                    weeksToRender={ weeksToRender }
                />
            </div>
        )
    }
}

CalendarGrid.propTypes = {
    classes: PropTypes.object.isRequired,
    date: PropTypes.instanceOf( Date ).isRequired,
    firstDayOfMonth: PropTypes.number.isRequired,
    daysInMonth: PropTypes.number.isRequired,
    weeksToRender: PropTypes.number.isRequired
}

export default withStyles( styles )( CalendarGrid );
