import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

import dateFns from 'date-fns';

const styles = theme => ( {
    
} );

class AgendaDay extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const { agendaStatus, reminders, onClose } = this.props;
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
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ onClose } color="primary">
                        Close
                    </Button>
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
