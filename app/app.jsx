var React = require('react');
var ReactDOM = require('react-dom');

var obj1 = {
  name: 'gowri',
  location: 'dallas'
};

var obj2 = {
  age: 42,
  ...obj1
};

console.log(obj2);

ReactDOM.render(
  <h1> Boilrerplate App</h1>,
  document.getElementById('app')
);
