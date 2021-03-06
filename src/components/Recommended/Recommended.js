import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import SingleYoutubeVideoCard from '../SingleYoutubeVideoCard'
import { recommendedVideos } from '../../dummyData/videos'

const styles = {
    recommendedContents: {
        marginTop: '80px',
        marginRight: '50px',
        marginLeft: '50px',
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
        marginTop: '24px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'space-evenly',
    },
}

class Recommended extends Component {
    state = {
        showMoreButton: true,
    }

    handleShowMoreButton = () => {
        this.setState({
            showMoreButton: false
        });
    }

    // displayRecommendations = (recommendedVideos, showMore) => {
    //     return showMore === true 
    //     ?
    //         recommendedVideos.map((video, index) => {
    //         while (index < 10) {
    //             return <div>
    //                     <SingleYoutubeVideoCard key={index}vidInfo={video}/>
    //                     <button onClick={() => this.handleShowMoreButton()}>SHOW MORE</button>
    //                     </div>
    //         }
    //         })
    //     :
    //         recommendedVideos.map((video, index) => {
    //             return  <div>
    //                     <SingleYoutubeVideoCard key={index}vidInfo={video}/>
    //                     </div>
    //         })
    // }

    render() { 
        const { classes } = this.props;
        const showMoreButton = this.state.showMoreButton;
        return (
            <div className={classes.recommendedContents}>
                <span className={classes.header}>Recommended</span>
                    <div className={classes.items}>
                        {
                            showMoreButton === true ?
                            recommendedVideos.map((video, index) => {
                                while (index < 10) {
                                    return <SingleYoutubeVideoCard key={index} vidInfo={video}/>
                                }
                            })
                            :
                            recommendedVideos.map((video, index) => {
                                return <SingleYoutubeVideoCard key={index} vidInfo={video}/>
                            })
                        }
                        
                    </div>
                        {
                            showMoreButton === true ? 
                                <div>
                                <button onClick={() => this.handleShowMoreButton()}>SHOW MORE</button>
                                </div>
                            :
                                ''
                        }
            </div>
        )
    }
}

export default withStyles(styles)(Recommended);