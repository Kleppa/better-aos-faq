import React from 'react';
import useDarkMode from 'use-dark-mode';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

const DarkModeToggle = (props) => {
    const { classes } = props;
    const darkMode = useDarkMode(false);

    return (

        <div>
            <Button variant="contained" onClick={darkMode.disable} color="primary" className={classes.button}>
                ☀
      </Button>
            <Button variant="contained" onClick={darkMode.enable} color="secondary" className={classes.button}>
                ☾
      </Button>

        </div>
    );
};
DarkModeToggle.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(DarkModeToggle);
