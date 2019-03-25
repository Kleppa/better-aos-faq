import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        minWidth: 275,
        maxWidth: 500
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};
const QuestionCard = (props) => {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
      </Typography>
                <Typography variant="h5" component="h2">
                    Battleplans
      </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Ayoooooooooo
      </Typography>
                <Typography component="p">
                    Q: If I use a model for an objective marker, does it count as a
    terrain piece? Can it block visibility or affect the movement of
    a unit?

                </Typography>
                <Typography component="p">
                    A: No to all questions. An objective marker is simply
                an object you use to mark the location of an objective
                on the battlefield. If you want to move a model to the
                location occupied by an objective marker, it is perfectly
                acceptable to move the marker to one side as long
                as you measure distances to the objective using its
            original location.
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    )
}
QuestionCard.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(QuestionCard);
