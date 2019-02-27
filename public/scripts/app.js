console.log('App is Running')

// JSX - Javascript XML
// var template = <p>this is fala fala</p>
var template = React.createElement(
    "h1",
    { id:"someid"},
    "Something new"
);
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)