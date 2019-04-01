import { connect } from 'react-redux';

import AgendaDay from './AgendaDay';

import { closeAgenda, deleteReminder, openAddReminder } from '../../redux/actions';

import * as dateFns from 'date-fns';

const mapStateToProps = ( state, ownProps ) => {
    const { agendaStatus } = state;
    const reminders = agendaStatus.isOpen
        ? state.reminders
            .filter( reminder => dateFns.isSameDay( reminder.date, agendaStatus.date ) )
            .sort( ( a, b ) => dateFns.getTime( a.time ) - dateFns.getTime( b.time ) )
        : [];

    return { reminders, agendaStatus };
}

const mapDispatchToProps = dispatch => {
    return {
        onClose: () => {
            dispatch( closeAgenda() );
        },
        onDeleteClick: date => {
            dispatch( deleteReminder( date ) );
        },
        onEditClick: reminder => {
            dispatch( closeAgenda() );
            dispatch( deleteReminder( reminder.date ) );
            dispatch( openAddReminder( reminder ) );
        }
    }
}

const AgendaDayContainer = connect( mapStateToProps, mapDispatchToProps )( AgendaDay );

export default AgendaDayContainer;
