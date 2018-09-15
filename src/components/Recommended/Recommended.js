import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import SingleYoutubeVideoCard from '../SingleYoutubeVideoCard'
import { recommendedVideos } from '../../dummyData/videos'

const styles = {
    recommendedContents: {
        marginTop: '24px',
    },
    header: {
        color: "black",
        display: "block",
        maxHeight: "2rem",
        overflow: 'hidden',
        fontSize: '1.6rem',
        fontWeight: 500,
        lineHeight: '2rem',
    },
    items: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'space-evenly',
    }
}

class Recommended extends Component {
    render() { 
        const { classes } = this.props;
        console.log(recommendedVideos)
        return (
            <div className={classes.recommendedContents}>
                <span className={classes.header}>Recommended</span>
                <div className={classes.items}>
                    {
                        recommendedVideos.map((video, index) => {
                            return <SingleYoutubeVideoCard key={index}vidInfo={video}/>
                        })
                    }
                </div>
                
            </div>
        )
    }
}

export default withStyles(styles)(Recommended);