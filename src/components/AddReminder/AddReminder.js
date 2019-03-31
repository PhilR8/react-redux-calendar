import React from 'react';
import PropTypes from 'prop-types';

import AddReminderForm from './AddReminderForm';

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import green from '@material-ui/core/colors/green';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import dateFns from 'date-fns';

const styles = theme => ( {
    addReminderFormContainer: {
        minHeight: '250px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10px'
    },
    reminderTextInput: {
    },
    closeButton: {
        position: 'absolute',
        right: '10px',
        top: '10px'
    }
} );

class AddReminder extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const { classes, addReminderStatus, onClose } = this.props;
        return (
            <Dialog
                open={ addReminderStatus.isOpen }
                onClose={ onClose }
                aria-labelledby="form-dialog-title"
                fullWidth={ true }
                maxWidth='md'
            >
                <DialogTitle id="form-dialog-title">
                    Add Reminder
                    <IconButton aria-label="Close" className={ classes.closeButton } onClick={ onClose }>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <Divider light />
                <DialogContent className={ classes.addReminderFormContainer }>
                    <TextField
                        className={ classes.reminderTextInput }
                        id="outlined-full-width"
                        label="Add Reminder (max 30 characters)"
                        style={{ margin: 8 }}
                        placeholder="Example: Buy Groceries"
                        fullWidth
                        margin="normal"
                        maxLength="30"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary">
                        Add Reminder
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

AddReminder.propTypes = {
    classes: PropTypes.object.isRequired
    // TODO: onClose callback function
}

export default withStyles( styles )( AddReminder );
