import React from 'react';
import PropTypes from 'prop-types';

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import green from '@material-ui/core/colors/green';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import dateFns from 'date-fns';

const styles = theme => ( {
    remindersContainer: {
        minHeight: '250px'
    },
    reminder: {
        margin: '15px',
        padding: '15px'
    },
    noRemindersText: {
        marginTop: '10px'
    },
    fabAdd: {
        margin: '20px',
        color: '#FFF',
        backgroundColor: green[600],
        '&:hover': {
            backgroundColor: green[800],
        }

    },
    closeButton: {
        position: 'absolute',
        right: '10px',
        top: '10px'
    }
} );

class AgendaDay extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const { classes, agendaStatus, reminders, onClose } = this.props;
        return (
            <Dialog
                open={ agendaStatus.isOpen }
                onClose={ onClose }
                aria-labelledby="form-dialog-title"
                fullWidth={ true }
                maxWidth='md'
            >
                <DialogTitle id="form-dialog-title">
                    { agendaStatus.date
                        ? dateFns.format( agendaStatus.date, 'dddd MMMM Do, YYYY' ) 
                        : 'Closing' // dialog close animation takes a while - need to figure this out
                    }
                    <IconButton aria-label="Close" className={ classes.closeButton } onClick={ onClose }>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <Divider light />
                <DialogContent className={ classes.remindersContainer }>
                    { 
                        reminders.length === 0
                            ? <DialogContentText className={ classes.noRemindersText }>
                                No reminders found for this date.
                              </DialogContentText>
                            : reminders.map( ( reminder, i ) => 
                                <Paper 
                                    key={ i } 
                                    className={ classes.reminder } 
                                    elevation={ 1 }
                                    style={{ backgroundColor: reminder.color }}
                                >
                                    <Typography variant='h5'>
                                        { dateFns.format( reminder.date, 'H:mma' ) }: { reminder.text }
                                    </Typography>
                                </Paper>
                            ) 
                    }
                </DialogContent>
                <DialogActions>
                    <Fab className={ classes.fabAdd } aria-label="Add">
                        <AddIcon />
                    </Fab>
                </DialogActions>
            </Dialog>
        );
    }
}

AgendaDay.propTypes = {
    classes: PropTypes.object.isRequired,
    calendarDate: PropTypes.instanceOf( Date ),
    dateObj: PropTypes.shape( { date: PropTypes.instanceOf( Date ) } ),
    reminders: PropTypes.array.isRequired
}

export default withStyles( styles )( AgendaDay );
