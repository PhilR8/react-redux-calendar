import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import DateFnsUtils from '@date-io/date-fns';
import {
    DatePicker,
    TimePicker,
    MuiPickersUtilsProvider,
} from 'material-ui-pickers';

const styles = theme => ( {
    addReminderFormContainer: {
        minHeight: '250px',
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column'
    },
    pickers: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '15px'
    },
    closeButton: {
        position: 'absolute',
        right: '10px',
        top: '10px'
    },
    formControl: {
        flex: '0 0 201px',
        marginTop: '16px',
        marginBottom: '8px'
    }
} );

class AddReminder extends React.Component{
    constructor( props ) {
        super( props );

        this.state = {
            date: new Date(),
            time: new Date(),
            color: '#f8bbd0',
            text: ''
        }
    }

    handleDateChange = date => {
        this.setState({ date: date });
    };

    handleTimeChange = date => {
        this.setState({ time: date });
    }

    handleColorChange = event => {
        this.setState({ color: event.target.value });
    }

    handleReminderTextChange = event => {
        this.setState({ text: event.target.value }); 
    }

    render() {
        const { classes, addReminderStatus, onClose, onAddClick } = this.props;
        const { date, time, color } = this.state;

        return (
            <Dialog
                open={ addReminderStatus.isOpen }
                onClose={ onClose }
                aria-labelledby='form-dialog-title'
                fullWidth={ true }
                maxWidth='md'
            >
                <DialogTitle id='form-dialog-title'>
                    Add Reminder
                    <IconButton aria-label='Close' className={ classes.closeButton } onClick={ onClose }>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <Divider light />
                <DialogContent className={ classes.addReminderFormContainer }>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <div className={ classes.pickers }>
                            <DatePicker 
                                margin='normal'
                                label='Choose Date'
                                value={date}
                                onChange={this.handleDateChange}
                            />
                            <TimePicker 
                                margin='normal'
                                label='Choose Time'
                                value={time}
                                onChange={this.handleTimeChange}
                            />
                            <FormControl className={classes.formControl}>
                                <InputLabel shrink htmlFor='color-label-placeholder'>
                                    Choose Color
                                </InputLabel>
                                <Select
                                    value={color}
                                    onChange={this.handleColorChange}
                                    input={<Input name='color' id='color-label-placeholder' />}
                                    name='color'
                                >
                                    <MenuItem value='#f8bbd0'>Red</MenuItem>
                                    <MenuItem value='#c8e6c9'>Green</MenuItem>
                                    <MenuItem value='#bbdefb'>Blue</MenuItem>
                                    <MenuItem value='#fff9c4'>Yellow</MenuItem>
                                    <MenuItem value='#ffe0b2'>Orange</MenuItem>
                                    <MenuItem value='#d1c4e9'>Purple</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </MuiPickersUtilsProvider>
                    <TextField
                        id='full-width'
                        label='Add Reminder (max 30 characters)'
                        style={{ margin: 8 }}
                        placeholder='Example: Buy Groceries'
                        margin='normal'
                        maxLength='30'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={ this.handleReminderTextChange }
                    />
                </DialogContent>
                <DialogActions>
                    <Button color='primary' onClick={ () => onAddClick( this.state ) }>
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
    // TODO: onAddClick callback function
}

export default withStyles( styles )( AddReminder );
