import React, { Component } from 'react';
// import logo from './logo.svg';
// import Users from '../src/user/users';
// import User from '../src/user/user'
import Child from './components/parentToChild/Child';
import './App.css';

class App extends Component {
//   state = {
//     name: 'techsith'
//   }
//   // componentDidMount(){
//   //  this.changeName();
//   // }
//   changeName = (value) => {
//   console.log(value)
//     this.setState({name:value})
//   }

//   input = (event) =>{
//     debugger
// this.setState({name:event.target.value})
//   }
  
//   render() {
//       return (
//         <div className="App-header">
//         <h1>hello React</h1>
//           <Users/>
//           <button onClick={()=>this.changeName('value')}>Change state</button>
//           <button onClick={this.changeName.bind(this, 'Value :-)')}>Change state</button>
//           <div>{this.state.name}</div>
//           <input type="text" onChange={this.input} value={this.state.name} />
//         </div>
//       );
//   }
state = {
  title: 'placeholder Title'
}
changeTheWorld = (newTitle) =>{
  this.setState({
title: newTitle
  })
}
render(){
  return(
    <div className = "App">
    <Child doWhatEver={()=>this.changeTheWorld('new Worldd')} title={this.state.title}/>
    </div>
  )
}
}

export default App;
