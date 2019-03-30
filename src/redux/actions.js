// action types
export const CREATE_REMINDER = 'ADD_REMINDER';
export const DELETE_REMINDER = 'DELETE_REMINDER';
export const UPDATE_REMINDER = 'UPDATE_REMINDER';
export const OPEN_AGENDA = 'OPEN_AGENDA';
export const CLOSE_AGENDA = 'CLOSE_AGENDA';

// action creators
export function createReminder( reminderObj ) {
    return { type: CREATE_REMINDER, reminderObj };
}

export function deleteReminder( epochTime ) {
    return { type: DELETE_REMINDER, epochTime };
}

export function updateReminder( reminderObj ) {
    return { type: UPDATE_REMINDER, reminderObj };
}

export function openAgenda( dateObj ) {
    return { type: OPEN_AGENDA, dateObj };
}

export function closeAgenda() {
    return { type: CLOSE_AGENDA };
}