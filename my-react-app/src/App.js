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

const User =({match}) =>{
  return(<h1>React {match.params.username}</h1>)
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <Route path="/" exact strict
          render={
            () => {
              return(<h1>Wellcome Home</h1>)
            }
          }/>
          
          <Route path="/about/" exact strict
          render={
            () => {
              return(<h1>Wellcome About</h1>)
            }
          }/>

          <Route path="/user/:username" exact strict component={User}
          />
        </div>
      </Router>
    );
  }
}

export default App;