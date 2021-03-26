import logo from './logo.svg';
import './css/styles.css'
import { Component } from 'react';
import ClickAction from './components/ClickAction.js'

var lis = [1, 2, 3, 4];

function Display(props) {
  return (
    <div>
      <h1>Hello {props.Name}</h1>
      <img src={props.imgPath}/>
    </div>
  );
}

class NewImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.yourName}</h1>
        <img className="card-img-bottom" src={this.props.imgPath}/>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <Nmap/>
      </div>
    );
  }
}

export default App;
