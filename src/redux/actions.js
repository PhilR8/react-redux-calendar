// three action types - they don't need their own file
export const CREATE_REMINDER = 'ADD_REMINDER';
export const DELETE_REMINDER = 'DELETE_REMINDER';
export const UPDATE_REMINDER = 'UPDATE_REMINDER';

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
