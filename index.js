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

let data = [
  {
    name: 'nahid',
    age: 24,
  },
  {
    name: 'jahid',
    age: 23,
  },
];

//spread operator to push an array of object

let newArr = [];
newArr.push(...data);
console.log(newArr);

let obj1 = { name: 'Nahid', age: 28 };

let arrTobConcat = [1, 2, 3];
let [x, y, ...z] = [1, 2, 3, 4, 5, 6, 7];
console.log(z);
let arr_add = [4, [5, 6]];
let newArray = arrTobConcat.concat(obj1, arr_add);

console.log(newArray);
