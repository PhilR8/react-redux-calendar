import { combineReducers } from 'redux';
import { 
    OPEN_AGENDA,
    CLOSE_AGENDA,
    CREATE_REMINDER,
    DELETE_REMINDER,
    UPDATE_REMINDER
} from './actions';

const initialAgendaState = {
    isOpen: false,
    date: null
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

function reminders( state = [], action ) {
    switch ( action.type ) {
        case CREATE_REMINDER:
            return [
                ...state,
                {
                    date: action.reminderObj.date,
                    color: action.reminderObj.color,
                    text: action.reminderObj.text
                }
            ]
        case DELETE_REMINDER:
            return state.filter( reminder => reminder.date.getTime() != action.epochTime )
        case UPDATE_REMINDER:
            return state.map( reminder => {
                if( reminder.date.getTime() == action.reminderObj.date.getTime() ) {
                    return action.reminderObj
                }  
                return reminder
            } )
        default: return state
    }
}

const calendarApp = combineReducers( {
    agendaStatus,
    reminders
} )

export default calendarApp;
