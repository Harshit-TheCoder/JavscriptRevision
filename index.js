//Variables
var a = 1;
let b = 2;
const c = 3;

//Normal Function
function sum(x, y){
    return x + y;
}

//Arrow Function
const multiply = (x, y) => x *y;

//Loop
for(let i=0;i<3;i++) console.log(i);

//Arrays
let arr = [1,2,3];
arr.map(n => n*2);

//Strings
let str = "JavaScript"
console.log(str.split("").reverse().join(""));

//Objects
const user = {
    name : "Harshit",
    age: 20
};

//Object Destructuring
let {name} = user

//Map
const m = new Map();
m.set("key", "value");

//Set
const s = new Set([1,2,3,4]);
console.log([...s]);

//Functions
const obj = {name: "Harshit"};
function greet(city){
    console.log(`Hi, I'm ${this.name} from ${city}`);
}

greet.call(obj, "Delhi");
greet.apply(obj, ["Delhi"]);
const bound = greet.bind(obj);
bound("Delhi");

//Closure
function outer(){
    let count = 0;
    return () => ++count;
}
const counter = outer();
console.log(counter()); // 1

//Currying
function curry(a){
    return function(b){
        return function(c){
            return a + b + c;
        };
    };
}

console.log(curry(1)(2)(3)); // 6

console.log(x);
var x = 5;

//setTimeout
setTimeout(() => console.log("Delayed by 1s"), 1000);

//setInterval
let id = setInterval(()=> console.log("Repeating..."), 500);
setTimeout(() => clearInterval(id), 3000);


//Debouncing
function debounce(func, delay){
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}
window.addEventListener("resize", debounce(() => {
    console.log("Resized");
}, 300));

//Throttling
function throttle(func, limit){
    let lastCall = 0;
    return (...args) => {
        const now = Date.now();
        if(now - lastCall >= limit){
            lastCall = now;
            func(...args);
        }
    };
}

window.addEventListener("scroll", throttle(() => {
    console.log("Throttled Scroll");
}, 200));

//DOM Manipulation
document.getElementById("clickBtn").addEventListener("click", function(){
    alert("Button Clicked");
});


//Spread Operator
const nums = [1,2,3];
const more = [...nums, 4];

//Rest Operator
function printAll(...args){
    console.log(args);
}

//Optional Chaining
const ob = {
    name: "H",
    address : {
        city: "Delhi"
    }
};

console.log(obj?.address?.city);

//Promises
let p = new Promise((res, rej) => setTimeout(() => res("Resolved"), 1000));
p.then(console.log);

async function fetchData(){
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await res.json();
    console.log(data);
}

fetchData();


//Prototype
function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hi, "+ this.name);
}
const p1 = new Person("Harshit");
p1.sayHi();

//Class
class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} make a noise`);
    }
}
class Dog extends Animal{
    speak(){
        console.log(`${this.name} barks`);
    }
}
new Dog("Tommy").speak();

//Memory Leak Example
let leakyArray = [];
function addToMemory(){
    leakyArray.push(new Array(100000).fill('*'));
}

//Event Loops, Microtasks, Macrotasks
console.log("Start");
setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
// Output:
// Start
// End
// Promise
// Timeout
