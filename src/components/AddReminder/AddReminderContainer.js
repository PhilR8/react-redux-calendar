import { connect } from 'react-redux';

import AddReminder from './AddReminder';

import { closeAddReminder, createReminder } from '../../redux/actions';

const mapStateToProps = ( state, ownProps ) => {
    const { addReminderStatus } = ownProps;

    return { addReminderStatus };
}

const mapDispatchToProps = dispatch => {
    return {
        onClose: () => {
            dispatch( closeAddReminder() );
        },
        onAddClick: reminderObj => {
            dispatch( createReminder( reminderObj ) );
        }
    }
}

const AddReminderContainer = connect( mapStateToProps, mapDispatchToProps )( AddReminder );

export default AddReminderContainer;
