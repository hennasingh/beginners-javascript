function calculateBill() {
  // function Body
}
// Pass Undefined as an argument if you want func to take its default value
// First Class Citizen

// Function Expression
const doctorize = function (firstName) {
  return `Dr ${firstName}`;
};

// Arrow Functions
const inchToCM = (inches) => inches * 2.54;
const add = (a, b = 3) => a + b;

// Returning an object in an Arrow Function
// disadvnt = less readable
const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE = Immediately invoked function expression

(function () {
  console.log('Running the Anon function');
})();

// Methods!! = Functions that live inside objects
/* eslint-disable*/
const henna = {
  name: 'Henna Singh',
  sayHi: function(name){
    return `Hi ${name}`
  },
  //Short-hand method
  yellHi() { 
    console.log('Hey Henna!!')
    }
}

//Callback Functions
//Timer Callback
setTimeout(function(){
    console.log('Done! Time to Sleep')
}, 1000)


