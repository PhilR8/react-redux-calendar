import { connect } from 'react-redux';

import App from './App';

import { openAddReminder } from '../../redux/actions';

const mapStateToProps = ( state, ownProps ) => {
    const { agendaStatus, addReminderStatus } = state;

    return { agendaStatus, addReminderStatus };
}

const mapDispatchToProps = dispatch => {
    return {
        onFabAddClick: () => {
            dispatch( openAddReminder() );
        }
    }
}

const AppContainer = connect( mapStateToProps, mapDispatchToProps )( App );

export default AppContainer;
