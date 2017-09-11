import React, { Component } from 'react';//we need to find this file somewhere else
//will look in packages for react that is why it doesn't have a file path. 
import logo from './logo.svg';//if in file structure then you will include the file path.
import './App.css';

class App extends Component {//renders to the DOM. Components 
  //are class based that is why we have a class in the first place
  //if you need state or functionality w/in component you need class. but if not 
  //then you can just write function. THis is just called a dummy component and then the function is exported.
  //when in doubt in your constructor function put props in the parameters part.
  
  render() {//every component you have will display something so hence the render method...
    return (//inside here you write your jsx :).
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
