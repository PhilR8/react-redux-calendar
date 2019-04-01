import { combineReducers } from 'redux';
import { 
    OPEN_AGENDA,
    CLOSE_AGENDA,
    OPEN_ADD_REMINDER,
    CLOSE_ADD_REMINDER,
    CREATE_REMINDER,
    DELETE_REMINDER,
    UPDATE_REMINDER
} from './actions';

const initialAgendaState = {
    isOpen: false,
    date: null
}

const initialAddReminderState = {
    isOpen: false,
    reminder: null
}

function agendaStatus( state = initialAgendaState , action ) {
    switch( action.type ) {
        case OPEN_AGENDA:
            return {
                isOpen: true,
                date: action.dateObj.date
            }
        case CLOSE_AGENDA:
            return {
                isOpen: false,
                date: null
            }
        default: return state
    }
}

function addReminderStatus( state = initialAddReminderState, action ) {
    switch( action.type ) {
        case OPEN_ADD_REMINDER:
            return {
                isOpen: true,
                reminder: action.reminder || null
            }
        case CLOSE_ADD_REMINDER:
            return {
                isOpen: false,
                reminder: null
            }
        case CREATE_REMINDER:
            return {
                isOpen: false,
                reminder: null
            }
        default: return state
    }
}

function reminders( state = [], action ) {
    switch ( action.type ) {
        case CREATE_REMINDER:
            return [
                ...state,
                {
                    date: action.reminderObj.date,
                    time: action.reminderObj.time,
                    color: action.reminderObj.color,
                    text: action.reminderObj.text
                }
            ]
        case DELETE_REMINDER:
            return state.filter( reminder => reminder.date !== action.date )
        case UPDATE_REMINDER:
            const filteredState = state.filter( reminder => reminder.date !== action.oldReminder.date );
            return [
                ...filteredState,
                {
                    date: action.updatedReminder.date,
                    time: action.updatedReminder.time,
                    color: action.updatedReminder.color,
                    text: action.updatedReminder.text
                }
            ]
        default: return state
    }
}

const calendarApp = combineReducers( {
    agendaStatus,
    addReminderStatus,
    reminders
} )

export default calendarApp;
