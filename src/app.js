console.log('App.js is running!');

// var app = {
//   title: 'Indecision App',
//   subtitle: 'Put your life in the hands of a computer'
// };
// var template = ()=>{
// return(
//   <div>
//     <h1>hello</h1>
//   {/* <h1>{app.title}</h1> */}
//   {/* <p>{app.subtitle}</p> */}
//   <ol>
//     <li>Item one</li>
//     <li>Item two</li>
//   </ol>
// </div>
// )
// }


// var user = {
//   name: 'Andrew',
//   age: 26,
//   location: 'Philadelphia'
// };
// var templateTwo = (
//   <div>
//     <h1>{user.name}</h1>
//     <p>Age: {user.age}</p>
//     <p>Location: {user.location}</p>
//   </div>
// );
class ABc extends React.Component{
  render(){
    return(
      <div>
        <h1>
          hello
        </h1>
      </div>
    )
  }
}
var appRoot = document.getElementById('app');

ReactDOM.render(ABc, appRoot);
