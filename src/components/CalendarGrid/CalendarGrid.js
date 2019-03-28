import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { daysArr, monthsArr, dateFns } from '../../utils/dateFns';

const styles = theme => ( {
    calendarGrid: {
        display: 'flex',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flex: 1
    }
} );

class CalendarGrid extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={ classes.calendarGrid }>test</div>
        )
    }
}

CalendarGrid.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles( styles )( CalendarGrid );
