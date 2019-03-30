import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './components/App/AppContainer';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import calendarApp from './redux/reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore( 
    calendarApp,
    { reminders: [ { date: new Date(), color: 'red', text: 'Create a reminder' } ] }, // preloaded state
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={ store }>
        <AppContainer />
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
