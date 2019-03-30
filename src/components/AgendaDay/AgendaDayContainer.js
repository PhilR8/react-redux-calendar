import { connect } from 'react-redux';
import AgendaDay from './AgendaDay';
import { closeAgenda } from '../../redux/actions';

import dateFns from 'date-fns';

const mapStateToProps = ( state, ownProps ) => {
    const { agendaStatus } = ownProps;
    const reminders = agendaStatus.isOpen
        ? state.reminders.filter( reminder => dateFns.isSameDay( reminder.date, agendaStatus.date.date ) )
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
