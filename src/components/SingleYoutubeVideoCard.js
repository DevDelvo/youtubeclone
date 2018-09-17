import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = {
    card: {
        marginRight: '4px',
        display: 'inline-block',
        marginBottom: '24px',
        width: 210,
        // padding: '4px',
    },
    cardBottom: {
        position: 'relative',
        display: 'flex',
        cursor: 'pointer',
        flexDirection: 'column',
    },
    cardInfo: {
        paddingRight: '24px',
    },
    media: {
        height: '117px',
        width: '210px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 0,
    },
    styleScope: {
        margin: '8px 0 8px',
    },
    title: {
        display: '-webkit-box',
        boxOrient: 'vertical',
        maxHeight: '3.2rem',
        overflow: 'hidden',
        textDecoration: 'none',
        textOverflow: 'ellipsis',
        whiteSpace: 'normal',
        fontWeight: '500',
        lineHeight: '1.6rem',
    },
    viewsAndUpload: {
        padding: 0,
    },
    views: {
        padding: 0,
        margin: 0,
    },
    upload: {
        padding: 0,
        margin: 0,
    },
    moreInfoButton: {
        padding: 0,
        width: '34px',
        height: '24px',
        position: 'absolute',
        top: 0,
        right: 0,
        marginTop: '4px',
    }
};

function SingleYouTubeVideoCard(props) {
    const { classes } = props;
    const {title, author, views, verified, uploadDate} = props.vidInfo;
        return (
            <div className={classes.card}>
                <CardActionArea>
                    <CardMedia 
                        className={classes.media}
                        image="http://mikatan.goodsmile.info/en/wp-content/uploads/-000//1/2018-08-21-52810.jpg"
                    />
                </CardActionArea>
                <div className={classes.cardBottom}>
                    <div className={classes.cardInfo}>
                        <h3 className={classes.styleScope}>
                            <a title={title} className={classes.title}>
                                {title}
                            </a>
                        </h3>
                    <Typography component="a">
                                {author}
                        </Typography>
                    <CardActions className={classes.viewsAndUpload}>
                        <Typography className={classes.views} component="span">
                                {views}views
                        </Typography>
                        <span>•</span>
                        <Typography className={classes.upload} component="span">
                                {/* 48 minutes ago */}
                                2 days ago
                        </Typography>
                    </CardActions>
                    </div>
                    <div className={classes.moreInfoButton}>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        )
}

SingleYouTubeVideoCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleYouTubeVideoCard);