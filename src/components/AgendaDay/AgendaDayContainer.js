import { connect } from 'react-redux';
import { openAgenda } from '../../redux/actions';
import AgendaDay from './AgendaDay';

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

    }    
}

const AgendaDayContainer = connect( mapStateToProps )( AgendaDay );

export default AgendaDayContainer;
