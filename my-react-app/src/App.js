import React, { Component } from 'react';
// import logo from './logo.svg';
// import Users from '../src/user/users';
// import User from '../src/user/user'
// import Child from './components/parentToChild/Child';
// import Parent from './components/parentToChild/parent';
// import User from './component/user'
// import Child from './Child'
import './App.css';
// import uniqueId from 'react-html-id';


const Temp = (props) => {
  console.log('render ui')
  return (
    <div>{props.val}</div>
  )
}



class App extends Component {
  state = {
    val: 1
  }
  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return { val:1 }
      });
    }, 2000)
  }
shouldComponentUpdate(nextProps,nextState){
  console.log('nextState', nextState)
  console.log('CurrentState', this.state)
  return(this.state === nextState ? false:true)
}


  render() {
    console.log('render App')
    return (
      <div className="App">
        <Temp val={this.state.val+9} />
      </div>
    )
  }
}

export default App;