// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Create an array with just length and elements are undefine
const arr = [...new Array(5)];
console.log(arr);

//Array.from

let a = Array.from({ length: 6 }, (v, i) => {
  console.log(v, i);
  return v;
});
console.log('the array from object with length property is=', a);
