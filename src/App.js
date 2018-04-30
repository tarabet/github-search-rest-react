import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppWrapper from "./containers/appWrapper";

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <AppWrapper />
        </MuiThemeProvider>
    );
  }
}

export default App;
