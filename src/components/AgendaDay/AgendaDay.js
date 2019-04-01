import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import * as dateFns from 'date-fns';

const styles = theme => ( {
    remindersContainer: {
        minHeight: '250px'
    },
    reminder: {
        margin: '15px',
        padding: '15px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    reminderText: {
        display: 'flex',
        alignItems: 'center'
    },
    noRemindersText: {
        marginTop: '10px'
    },
    closeButton: {
        position: 'absolute',
        right: '10px',
        top: '10px'
    },
    deleteButtonHidden: {
        visibility: 'hidden'
    },
    deleteButtonVisible: {
        visibility: 'visible'
    }
} );

class Reminder extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            reminderFocused: false
        }
    }

    onReminderMouseOver = () => {
        this.setState( { reminderFocused: true } );
    }

    onReminderMouseOut = () => {
        this.setState( { reminderFocused: false } );
    }

    render() {
        const { classes, reminder } = this.props;
        const deleteBtnClass = this.state.reminderFocused
            ? classes.deleteButtonVisible
            : classes.deleteButtonHidden;

        return (
            <Paper
                className={ classes.reminder }
                elevation={ 1 }
                style={{ backgroundColor: reminder.color }}
                onMouseOver={ this.onReminderMouseOver }
                onMouseOut={ this.onReminderMouseOut }
            >
                <Typography variant='h5' className={ classes.reminderText }>
                    { dateFns.format( reminder.time, 'H:mma' ) }: { reminder.text }
                </Typography>
                <IconButton className={ deleteBtnClass } aria-label="Delete">
                    <DeleteIcon />
                </IconButton>
            </Paper>

        )
    }
}

Reminder.propTypes = {
    classes: PropTypes.object.isRequired,
    reminder: PropTypes.shape( {
        date: PropTypes.instanceOf( Date ),
        time: PropTypes.instanceOf( Date ),
        color: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    } )
}

class AgendaDay extends React.Component {
    render() {
        const { classes, agendaStatus, reminders, onClose } = this.props;
        return (
            <Dialog
                open={ agendaStatus.isOpen }
                onClose={ onClose }
                aria-labelledby='form-dialog-title'
                fullWidth={ true }
                maxWidth='md'
            >
                <DialogTitle id='form-dialog-title'>
                    { agendaStatus.date
                        ? dateFns.format( agendaStatus.date, 'LLLL do, yyyy' )
                        : 'Closing' // dialog close animation takes a while - need to figure this out
                    }
                    <IconButton aria-label='Close' className={ classes.closeButton } onClick={ onClose }>
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
                                <Reminder key={ i } classes={ classes } reminder={ reminder } />
                            )
                    }
                </DialogContent>
            </Dialog>
        );
    }
}

AgendaDay.propTypes = {
    classes: PropTypes.object.isRequired,
    calendarDate: PropTypes.instanceOf( Date ),
    dateObj: PropTypes.shape( { date: PropTypes.instanceOf( Date ) } ),
    reminders: PropTypes.array.isRequired
    // TODO: onClose callback function
}

export default withStyles( styles )( AgendaDay );
