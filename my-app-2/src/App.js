import logo from './logo.svg';
import './css/styles.css'
import { Component } from 'react';
import TopMenu from './components/TopMenu.js';
import Header from './components/Header.js'

class App extends Component {
  render() {
    return (
      <div>
        <TopMenu/>
        <Header/>
      </div>
    );
  }
}

export default App;
