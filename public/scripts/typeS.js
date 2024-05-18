// let names: string[] = ['matter', 'john', 'frank'];

// console.log(names);

// var stringMe = 'I am a boy "inside" a boy and a girl "shop';

// for (var i = 9; i < 50 && i != 45; ++i) {
//   //console.log('i is now ' + i);
// } 

// var isArray = ['bush', 'farm', 'lazy', 'motors'];

// console.log('sliced array and now is : ', isArray.slice(0,2));

// console.log('spliced array : ', isArray.splice(0, 3, 'Motors', 'farmlands')); 
// // remove 'count' number of elemetns from indicated index, replaced by inputed values,
// // ..then returns the remmoved elements.
// console.log(isArray+ '\nReturned value');
// isArray.pop(); // remove elemtns from end of array

// isArray.slice(1,2); // remove element from indicated index, stops before end indiex

// console.log(isArray);

// console.log(stringMe);

// console.log(isArray[0][0]);

// function wordBlanks(myNoun, myadjective, myVerb, myAdverb) {
//   var result = "";
//   result += "The " + myadjective + myNoun + myVerb + " to the store "+ myAdverb;

//   return result;
// }

// console.log(wordBlanks('dog', 'big', 'ran', 'quickly'));

// var ourArray = [['house', 'mathew', 'john'], ['badass', 'stolen', 'fried']];

// console.log(ourArray);

// var mydata = ourArray[0][ourArray[0].length-1];

// ourArray[0][ourArray[0].length-1] = "Collins";
// ourArray.push(['Tomi', 'Stella', 'Franka']); // add elemtns to end fo array
// console.log(ourArray);

// ourArray.shift(); // remove elemtns from start of array
// console.log(ourArray);

// ourArray.unshift(['Stella', 'Franka']); // add elemtns to start of array
// console.log(ourArray);

// var myTime = '12:23 AM';

// function inFunctionScope () {
//   var myTime = '10:45pm';

//   return myTime;
// }


// var yourTime = '6:55 AM';
// console.log(yourTime);

// console.log(myTime);
// console.log(inFunctionScope());

// function addAndRemove (arr, item) {
//   arr.push(item);
//   return arr.shift();
// }

// var arr = [56, 34, 89, 209, 9];
// console.log(arr);

// console.log(addAndRemove(arr, 0));
// console.log(arr);


// var storage = {
//   name: "Collins",
//   age: 31,
//   Nationality: "Nigerian",
//   lastName: "Amalimeh",

//   sayHello : function() {
//     console.log(`Hello! my name is ${this.name}`);
//   },

//   tellMyAge: function() {
//     console.log(`hello! I am ${this.age} years old.`);
//   },

//   tellNationality: () => {
//     console.log(`I am from ${storage.Nationality}`);
//   },

//   visitedCountries: [
//     {northAfrica: "morroco",
//      northAE: "Algeria", 
//      europe: "Berlin", 
//      bigGuys: "Germany"},
//     {occupation: "Studen", savings: "gold"}
//   ],

//   peopleWhoCanTravel: {
//     person: {name: "stella", age: 45, status: "single" },
//     person2: {name: "Franka", age: 45, status: "single" },
//   }
// }

// var storage2 = {
//   "name of student": "Collins",
//   "age": 31,
//   "Nationality": "Nigerian",
//   "lastName": "Amalimeh"
// }


// storage.sayHello();
// storage.tellMyAge();
// storage.tellNationality();

// console.log(storage2["name of student"]);

// console.log(storage.visitedCountries);
// console.log(storage.peopleWhoCanTravel);
// console.log(storage);

// // delete storage2.age;

// storage2.age = 50;


// console.log(storage2);

// storage2["address"] = "Abuja";
// storage2.city = "Budapest";

// console.log(storage2); 

// arr.push("Stanley");

// var arr2 = [
//   {
//     firstName: "stella", 
//     age: 45, 
//     status: "single"
//    },

//   {
//     firstName: "boss", 
//     age: 45, 
//     status: "single" 
//   }
// ];

// function search(name, prop) {

//   for (i = 0; i < arr2.length; ++i) {
//     if(arr2[i].firstName == name) return arr2[i][prop];
//   }
  
//   return "not fund";
// }

// function search2(name, prop) {
//   const result = arr2.reduce((acc, ele) => {
//     if (ele.firstName == name) return ele;
//     return acc;
//   });

//   return result ? result[prop] : "not such details";
// }


// // console.log(arr2[1][prop] + ' here ');
// var prop = "firstName";
// console.log(search2("boss", "firstName"));

// var list = [4, 6, 89, 2, 0];
// var list2 = [];

// const result = list.reduce((accumulator, element) => accumulator + element, 0);

// console.log(result);

/**
 * @param {Function} fn
 * @return {Function}
 */

/* Example 1:

Input:
fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]
Output: [4,4,1,3,2] */

function fn(a, b) {
  return a + b;
}

function memoize(fn) {

  var result = {};

  return function (...args) {
    let n = args[1];
    console.log(args + " inside");
    if (n in result) {
      return result[n];
    }
    else {
      let value = fn(n);
      result[n] = value;
      return result;
    }
  }
}

let v = undefined; // remove 





const memo = memoize(fn);

console.log(memo([[2,2],[2,2],[],[1,2],[]])); 


/** 
* let callCount = 0;
* const memoizedFn = memoize(function (a, b) {
*	 callCount += 1;
*   return a + b;
* })
* memoizedFn(2, 3) // 5
* memoizedFn(2, 3) // 5
* console.log(callCount) // 1 
*/





















