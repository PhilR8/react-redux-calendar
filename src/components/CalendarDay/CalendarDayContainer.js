import { connect } from 'react-redux';
import CalendarDay from './CalendarDay';

import dateFns from 'date-fns';

const mapStateToProps = ( state, ownProps ) => {
    const reminders = state.reminders.filter( reminder =>
        dateFns.isSameDay( reminder.date, ownProps.dateObj.date )
    )
    return { reminders };
}

const CalendarDayContainer = connect( mapStateToProps )( CalendarDay );

export default CalendarDayContainer;
