import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavigationBar/NavBar';
import Recommended from './components/Recommended/Recommended'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  sectionList: {
    display: 'flex',
    flex: 1,
  }
}

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <NavBar />
        <div className={classes.sectionList}>
        <Recommended />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
