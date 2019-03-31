import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import dateFns from 'date-fns';

const styles = theme => {
    
}

class AddReminderForm extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <TextField
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
        )
    }
}

AddReminderForm.propTypes = {
    
}

export default withStyles( styles )( AddReminderForm );
