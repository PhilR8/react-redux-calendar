import { combineReducers } from 'redux';
import { 
    CREATE_REMINDER,
    DELETE_REMINDER,
    UPDATE_REMINDER
} from './actions';

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

// not needed for this app, but doing for practice
const calendarApp = combineReducers( {
    reminders
} )

export default calendarApp;
