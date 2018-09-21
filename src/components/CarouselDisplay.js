import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SingleYoutubeVideoCard from "./SingleYoutubeVideoCard";
import { upLoadedVideosBy } from '../dummyData/videos';

const styles = { 
    contents: {
        marginTop: '80px',
        marginRight: '50px',
        marginLeft: '50px',
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'center',
    },
    title: {
        color: "black",
        display: "block",
        maxHeight: "2rem",
        overflow: 'hidden',
        fontSize: '1.6rem',
        fontWeight: 500,
        lineHeight: '2rem',
    },
    titleAnnotation: {
        marginLeft: "8px",
        display: 'block',
        maxHeight: '1.8rem',
        overflow: 'hidden',
        fontSize: '1.3rem',
        fontWeight: '400',
        lineHeight: '1.8rem',
        textTransform: 'none',
    },
    spacer: {
        flex: 1,
        flexBasis: '0.000000001px',
    },
    videos: {

    }
}

class CarouselDisplay extends Component {
    state = {
        display: true,
    }

    handleClose = () => {
        this.setState({ display: false });
        // console.log('close button clicked');
      }

    render() {
        const { classes, handleClose } = this.props;
        const display = this.state.display;
        const author = "anime dude"
        const upLoadedVideos = upLoadedVideosBy(author)
        return (
            <div className={classes.contents}>
                {
                    display === true ? 
                    <div>
                        <div className={classes.titleContainer}>
                        <span className={classes.title}>{author}</span>
                        <div className={classes.titleAnnotation}>
                            by <a>{author}</a>
                        </div>
                        <div className={classes.spacer}></div>
                        <button onClick={() =>this.handleClose()}>X</button>
                        </div>
                        <div className={classes.videos}>
                            {
                                upLoadedVideos.map((video, index) => {
                                    return <SingleYoutubeVideoCard key={index} vidInfo={video} />
                                })
                            }
                        </div>
                    </div>
                    :
                    ""
                }
            </div>
        )
    }
}

export default withStyles(styles)(CarouselDisplay);