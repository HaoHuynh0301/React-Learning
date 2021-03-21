import logo from './logo.svg';
import './App.css';
import React from 'react';

class Hao extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}


function Test(pros) {
  return (
    <div>
      <h1>{pros.title}</h1>
      <img src = {pros.links} alt = "Nodata"/>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React
        </p>
        
        <Test title = "Huynh Hao" links = "\media\62397998_2419012068163149_3111132412092874752_n.jpg"></Test>
      </header>
    </div>
  );
}

export default App;
