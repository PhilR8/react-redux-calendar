import { connect } from 'react-redux';

import CalendarDay from './CalendarDay';

import { openAgenda } from '../../redux/actions';

import dateFns from 'date-fns';

const mapStateToProps = ( state, ownProps ) => {
    const reminders = state.reminders.filter( reminder =>
        dateFns.isSameDay( reminder.date, ownProps.dateObj.date )
    )
    return { reminders };
}

const mapDispatchToProps = dispatch => {
    return {
        onDayClick: dateObj => {
            dispatch( openAgenda( dateObj ) )
        }
    }    
}

const CalendarDayContainer = connect( mapStateToProps, mapDispatchToProps )( CalendarDay );

export default CalendarDayContainer;
