import { connect } from 'react-redux';
import App from './App';

import dateFns from 'date-fns';

const mapStateToProps = ( state, ownProps ) => {
    const agendaStatus = state.agendaStatus; 
    return { agendaStatus };
}

const AppContainer = connect( mapStateToProps )( App );

export default AppContainer;
