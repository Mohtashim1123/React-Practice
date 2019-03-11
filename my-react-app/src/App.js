import React, { Component } from 'react';
// import logo from './logo.svg';
// import Users from '../src/user/users';
// import User from '../src/user/user'
// import Child from './components/parentToChild/Child';
// import Parent from './components/parentToChild/parent';
// import User from './component/user'
// import Child from './Child'
import './App.css';
import Route from 'react-router-dom/Route';
import { BrowserRouter as Router } from 'react-router-dom';
// import uniqueId from 'react-html-id';



class App extends Component {
  submit = () => {
    console.log(this.firstName.value);
    console.log(this.lastName.value);
    console.log(this.age.value);
  }
  onKeyUp = (e) => {
    console.log(e.keyCode)
    if(e.keyCode === 13){
      this.lastName.focus();
      
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Form</h1>
        <div>
          <span>First Name:</span>
          <input ref={(input) => { this.firstName = input }} onKeyUp={()=>this.onKeyUp} type="text" />
        </div>
        <div>
          <span>Last Name:</span>
          <input ref={(input) => { this.lastName = input }} type="text" />
        </div>
        <div>
          <span>Age:</span>
          <input ref={(input) => { this.age = input }} type="submit" value="submit" onClick={this.submit} />
        </div>
      </div>
    );
  }
}

export default App;