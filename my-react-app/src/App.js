import React, { Component } from 'react';
// import logo from './logo.svg';
// import Users from '../src/user/users';
// import User from '../src/user/user'
// import Child from './components/parentToChild/Child';
// import Parent from './components/parentToChild/parent';
import User from './component/user'
import './App.css';
import uniqueId from 'react-html-id';

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
  constructor() {
    super();
    uniqueId.enableUniqueIds(this);
    this.state = {
      users: [
        { id: this.nextUniqueId(), name: 'john', age: 20 },
        { id: this.nextUniqueId(), name: 'peter', age: 30 },
        { id: this.nextUniqueId(), name: 'patel', age: 25 },
      ]
    }
    console.log(this.state);
  }
  // changeTheWorld = (newTitle) =>{
  //   this.setState({
  // title: newTitle
  //   })
  // }
  deleteUser = (index, e) => {
    const users = Object.assign([], this.state.users)
    users.splice(index, 1);
    this.setState({ users: users })
  }
  changeUserName = (id, e) => {
    debugger
    this.setState({[e.target.name]: e.target.value})
    // const index = this.state.users.findIndex((user) => {
    //   console.log(index)
    //   return user.id === id
    // });
    // const user = Object.assign({}, this.state.users[index]);
    // user.name = e.target.value;
    // const users = Object.assign.name([], this.state.users);
    // users[index] = user;
    // this.setState({ users: users });
  }


  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.users.map((user, index) => {
              return (<User
                age={user.age}
                deleteElement={() => this.deleteUser(this.index)}
                changeEvent={(e) => this.changeUserName(this.index,e)}
              >{user.name}</User>
              )
            })
          }
        </ul>
        {/* <Parent dosWhatEver={()=>this.changeTheWorld('new Worldd')} title={this.state.title}/> */}
      </div>
    )
  }
}

export default App;
