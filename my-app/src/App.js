import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

var Name = "HuynhQuanNhatHao";
var str = [1, 2, 3, 4, 5];
var items = str.map((x) => (x*2) + ", ");

function nMap(props) {
  return(
   <div>
     <h1>Hello</h1>
   </div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <nMap/>
      </div>
    );
  }
}

export default App;
