import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavigationBar/NavBar';
import Recommended from './components/Recommended/Recommended'
import CarouselDisplay from './components/CarouselDisplay'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  navBarContainer: {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 2020,
    transform: 'translateY(0)',
    transition: 'transform 0.3s ease',
    height: '20px',
  },
  sectionList: {
    display: 'flex',
    flex: 1,
  }
}

class App extends Component {

  handleClose = () => {
    console.log('close button clicked');
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <div className={classes.navBarContainer}>
          <NavBar />
        </div>
        <div className={classes.sectionList}>
          <Recommended />
        </div>
        <div className={classes.sectionList}>
          <CarouselDisplay handleClose={this.handleClose}/>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
