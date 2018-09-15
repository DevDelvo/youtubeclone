import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import SingleYoutubeVideoCard from '../SingleYoutubeVideoCard'
import { recommendedVideos } from '../../dummyData/videos'

const styles = {
    header: {
        color: "black",
        display: "block",
        maxHeight: "2rem",
        overflow: 'hidden',
        fontSize: '1.6rem',
        fontWeight: 500,
        lineHeight: '2rem',
    }
}

class Recommended extends Component {
    render() { 
        const { classes } = this.props;
        console.log(recommendedVideos)
        return (
            <div>
                <span className={classes.header}>Recommended</span>
                {
                    recommendedVideos.map((video, index) => {
                        return <SingleYoutubeVideoCard key={index}vidInfo={video}/>
                    })
                }
                
            </div>
        )
    }
}

export default withStyles(styles)(Recommended);