import { connect } from 'react-redux';

import AgendaDay from './AgendaDay';

import { closeAgenda } from '../../redux/actions';

import * as dateFns from 'date-fns';

const mapStateToProps = ( state, ownProps ) => {
    const { agendaStatus } = ownProps;
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
        }
    }
}

const AgendaDayContainer = connect( mapStateToProps, mapDispatchToProps )( AgendaDay );

export default AgendaDayContainer;
