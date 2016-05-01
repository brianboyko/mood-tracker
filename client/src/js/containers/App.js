// ==========================
// ./containers/App.js
// ==========================

// requirements
import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { reduxify } from '../utilities/reduxify'
import * as actions from '../actions'
// material-ui requirements
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';

import Paper from 'material-ui/Paper';


const muiTheme = getMuiTheme();

import { Value } from "react-object";

let ShowObject = Value;

const obj = { foo: 123, bar: { baz: "hello" }};



// components/containers

// actions
// import * as actions from '../actions/index';

// utilities



export default class App extends Component {
  constructor (props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    console.log("Foo")
    this.props.actions.addOne();
    setInterval(() => {
      this.props.actions.addOne()
    }, 1000)
  }


  render () {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div ref="App">
          Hello World!
          Here are my props:
          <div>{this.props.mytest}</div>
          <ShowObject
              label="this.props"
              value={ this.props }/>
              <div>{this.props.myTest}</div>
        </div>
      </MuiThemeProvider>
    );
  }
}


export default reduxify(actions, App);
