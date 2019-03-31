import { connect } from 'react-redux';
import AddReminder from './AddReminder';
import { closeAddReminder } from '../../redux/actions';

import dateFns from 'date-fns';

const mapStateToProps = ( state, ownProps ) => {
    const { addReminderStatus } = ownProps;

    return { addReminderStatus };
}

const mapDispatchToProps = dispatch => {
    return {
        onClose: () => {
            dispatch( closeAddReminder() );
        }
    }    
}

const AddReminderContainer = connect( mapStateToProps, mapDispatchToProps )( AddReminder );

export default AddReminderContainer;
