
/*
console.log(this);
//Window {window: Window, self: Window, document: document, name: '', location: Location, …}
*/




/*
function demo() {
    console.log(this);
   }
   console.log(this);
   demo();
  */
   //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
   //Window {window: Window, self: Window, document: document, name: '', location: Location, …}



/*
   function demo() {
    console.log(this);
   }
   var demo2 =function() {
    console.log(this);
   }
   console.log(this);
   demo();
   demo2 ();
*/
   //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
   //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//Window {window: Window, self: Window, document: document, name: '', location: Location, …}





/*
function demo() {
    console.log(this);
   }
   var demo2 =function() {
    console.log(this);
   }
  
var obj = {
    'prop1' : 12,
    'print' : function(){
        console.log(this); 
    }
}
obj.print();

// {prop1: 12, print: ƒ}
*/




/*---------------This in Strict Mode-----------------*/

/*
function demo() {
    console.log(this);
   }
    
var obj = {
    'prop1' : 12,
    'print' : function(){
        console.log(this); 
    }
}
demo();
*/

// Window {window: Window, self: Window, document: document, name: '', location: Location, …}



/*
function demo() {
    console.log(this);
   }
    
var obj = {
    'prop1' : 12,
    'print' : function(){
        console.log(this); 
    }
}
demo();
obj.print();

// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// {prop1: 12, print: ƒ}
*/



/*
'use strict';
function demo() {
    console.log(this);
   }
    
var obj = {
    'prop1' : 12,
    'print' : function(){
        console.log(this); 
    }
}
demo();
obj.print();

//undefined
//{prop1: 12, print: ƒ}
*/





/*
'use strict';
function demo() {
    console.log(this);
   }
    
var obj = {
    'prop1' : 12,
    'print' : function(){
        console.log(this); 
    }
}
demo.call(obj);
*/
//{ prop1: 12, print: [Function: print] }



/*
'use strict';
function demo() {
    console.log(this);
   }
    
var obj = {
    'prop1' : 12,
    'print' : function(){
        console.log(this); 
    }
}
demo.call(window);

//Window {window: Window, self: Window, document: document, name: '', location: Location, …}
*/




/*
'use strict';
function demo(a,b) {
    console.log(this);
    console.log(a,b);
   }
    
var obj = {
    'prop1' : 12,
    'print' : function(){
        console.log(this); 
    }
}
demo.call(obj,3,4);
*/
// { prop1: 12, print: [Function: print] }
// 3 4



/*
'use strict';
function demo(a,b) {
    console.log(this);
    console.log(a,b);
   }
    
var obj = {
    'prop1' : 12,
    'print' : function(){
        console.log(this); 
    }
}
demo.call(obj,3,4);
demo.apply(obj,[3,4]);

// { prop1: 12, print: [Function: print] }
// 3 4
// { prop1: 12, print: [Function: print] }
// 3 4
*/






/*----------Function to create Objects-------------*/
/*
var student1 = {
    name : "abc",
    rollNo : 10,
    marks : 80,
};
console.log(student1); 

// {name: 'abc', rollNo: 10, marks: 80}
*/




/*
var student1 = {
    name : "abc",
    rollNo : 10,
    marks : 80,
};
console.log(student1); 

var student2 = {
    name : "xyz",
    rollNo : 20,
    marks : 85,
};
console.log(student1); 
*/






/*
function createStudent (name,rollNo,marks) {
    var student = {};   //new object();
    student.name = name;
    student.rollNo = rollNo;
    student.marks = marks
    return student;
}
var student1 = createStudent("abcd",15,78);
var student2 = createStudent("pqrs",20,77);

console.log(student1); 
//{ name: 'abcd', rollNo: 15, marks: 78 }
console.log(student2); 
//{ name: 'pqrs', rollNo: 20, marks: 77 }

*/







//------------------Constructor---------------------
/*
function createStudent (name,rollNo,marks) {
    //var student = {};   //new object();   //you dont have create object
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks
      //return student;  //you dont have return object in construcor
}
var student1 = new createStudent("abcd",15,78);
var student2 = new createStudent("pqrs",20,77);
console.log(student1); 
//createStudent{ name: 'abcd', rollNo: 15, marks: 78 }
console.log(student2); 
//createStudent{ name: 'pqrs', rollNo: 20, marks: 77 }

*/




/*

function createStudent (name,rollNo,marks) {
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks
    }
var student1 = new createStudent("abcd",15,78);
var student2 =  createStudent("pqrs",20,77);
console.log(student1); 
//createStudent{ name: 'abcd', rollNo: 15, marks: 78 }
console.log(student2); 
//createStudent{ name: 'pqrs', rollNo: 20, marks: 77 }
*/





/*
function creteStudent (name,rollNo,marks) {
    //var student = {};   //new object();
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks
    }
var student1 = new createStudent("abcd",15,78);
var student2 =  createStudent("pqrs",20,77);
console.log(student1); 
//createStudent{ name: 'abcd', rollNo: 15, marks: 78 }
console.log(student2); 
//undefined
*/





/*
function createStudent (name,rollNo,marks) {
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks
    console.log(this); 
}
var student1 = new createStudent("abcd",15,78);
var student2 = new createStudent("pqrs",20,77);


//createStudent{ name: 'abcd', rollNo: 15, marks: 78 }
//createStudent { name: 'pqrs', rollNo: 20, marks: 77 }
*/









/*
function createStudent (name,rollNo,marks) {
     console.log(this); 
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks
   // console.log(this); 
}
var student1 = new createStudent("abcd",15,78);
var student2 = new createStudent("pqrs",20,77);


//createStudent{}
//createStudent {}
*/



// first letter of constructor should be in capital
/*
function Student (name,rollNo,marks) {
        console.log(this); 
      this.name = name;
     this.rollNo = rollNo;
     this.marks = marks
 }
 var student1 = new Student("abcd",15,78);
 var student2 =  Student("pqrs",20,77);
 
 //Student {}
 //Window {window: Window, self: Window, document: document, name: 'pqrs', location: Location, …}
 */






/*-----------Adding Behaviour to Objects--------------*/
/*
function Vehicle (numWheels,price) {
    this.numWheels = numWheels ;
    this.price = price;
    }
 var vehicle1 = new Vehicle(2,50000);
 var vehicle2 =  Vehicle(4,50000);
  console.log(vehicle1);

 // Vehicle { numWheels: 2, price: 50000 }
*/










/*
function Vehicle (numWheels,price) {
   this.numWheels = numWheels ;
   this.price = price;
   this.getPrice = function(){
    return this.price;
    }
 }
var vehicle1 = new Vehicle(2,50000);
var vehicle2 =  Vehicle(4,50000);
console.log(vehicle1.getPrice()); 
console.log(vehicle1);
console.log(vehicle2);
// 50000
// Vehicle {
//   numWheels: 2,
//   price: 50000,
//   getPrice: [Function (anonymous)]
// }
// undefined

*/




/*
function Vehicle (numWheels,price) {
    this.numWheels = numWheels ;
    this.price = price;
    this.getPrice = function(){
     return this.price;
     }
  }
 var vehicle1 = new Vehicle(2,50000);
 var vehicle2 = new Vehicle(4,50000);
 console.log(vehicle1.getPrice()); 
 //console.log(vehicle1);
 console.log(vehicle2.getPrice());

//  50000
//  50000
*/




/*----------What is a Prototype ?-----------------*/
/*
function Vehicle (numWheels,price) {
    this.numWheels = numWheels ;
    this.price = price;
    this.getPrice = function(){
     return this.price;
     }
  }
 var vehicle1 = new Vehicle(2,50000);
 var vehicle2 = new Vehicle(4,50000);
*/


 /*  //output
// type on console => Vehicle
// ƒ Vehicle (numWheels,price) {
//     this.numWheels = numWheels ;
//     this.price = price;
//     this.getPrice = function(){
//      return this.price;
//      }
//   }

//type on console => 
//{constructor: ƒ}


//type on console => Vehicle.prototype.constructor
ƒ Vehicle (numWheels,price) {
    this.numWheels = numWheels ;
    this.price = price;
    this.getPrice = function(){
     return this.price;
     }
  }
*/








/*----------------------Why Prototypes ?-------*/
/*
function Vehicle (numWheels,price) {
    this.numWheels = numWheels ;
    this.price = price;
   
  }
  Vehicle.prototype.getPrice = function(){
    return this.price;
  };
 var vehicle1 = new Vehicle(2,50000);
 var vehicle2 = new Vehicle(4,50000);
*/



//output 1

// type on console => vehicle1
//  Vehicle {numWheels: 2, price: 50000}

// type on console => vehicle1.getPrice();
//  50000

//  type on console =>vehicle2
//  Vehicle {numWheels: 4, price: 50000}

//  type on console =>vehicle2.getPrice();
//  50000

// type on console => Vehicle.prototype
//  {getPrice: ƒ, constructor: ƒ}
//  getPrice
//  : 
//  ƒ ()
//  constructor
//  : 
//  ƒ Vehicle(numWheels,price)
//  [[Prototype]]
//  : 
//  Object


//output2

// type on console =>Vehicle.prototype.color = "black";
// 'black'

// type on console => Vehicle.prototype
// {color: 'black', getPrice: ƒ, constructor: ƒ}

// type on console =>vehicle1
// Vehicle {numWheels: 2, price: 50000}

// type on console =>vehicle1.color;
// 'black'

// type on console =>vehicle2.color;
// 'black'

// type on console =>vehicle1.color;
// 'black'






/*----------More Properties around Prototype-----------*/ 
/*
function Vehicle (numWheels,price) {
    this.numWheels = numWheels ;
    this.price = price;
   
  }
  Vehicle.prototype.getPrice = function(){
    return this.price;
  };
 var vehicle1 = new Vehicle(2,50000);
 var vehicle2 = new Vehicle(4,50000);
 */


/*
//OUTPUT 1
type on console =>vehicle1
Vehicle {numWheels: 2, price: 50000}

type on console =>vehicle1.__proto__
{getPrice: ƒ, constructor: ƒ}

type on console =>vehicle1.__proto__=== Vehicle.prototype
true
*/

/*
//output2
type on console =>Vehicle.prototype.isPrototypeOf(vehicle1);
true
type on console => Vehicle.prototype.isPrototypeOf(vehicle2);
true
*/

/*
//output3
type on console => vehicle1.hasOwnProperty('price');
true
type on console => vehicle1.hasOwnProperty('getPrice');
false
*/


/*
//output4
type on console => Vehicle.prototype.color = "black";
'black'

type on console => Vehicle.prototype
{color: 'black', getPrice: ƒ, constructor: ƒ}color: "black"getPrice: ƒ ()constructor: ƒ Vehicle(numWheels,price)[[Prototype]]: Object

type on console => vehicle1.color
'black'

type on console => vehicle1.color = "white";
'white'

type on console => Vehicle.prototype
{color: 'black', getPrice: ƒ, constructor: ƒ}

vehicle1.color
'white'

type on console => vehicle2.color
'black'

type on console => vehicle1.hasOwnProperty('color');
true

type on console => vehicle2.hasOwnProperty('color');
false
*/





/*--------------------Objects--------------------*/

function Vehicle(numWheels, price) {
    this.numWheels = numWheels;
    this.price = price;

}
Vehicle.prototype.getPrice = function() {
    return this.price;
};
var vehicle1 = new Vehicle(2, 50000);
var vehicle2 = new Vehicle(4, 50000);

/*
 type on console => Object
 ƒ Object() { [native code] }

 type on console => Object.prototype
 {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
 
 type on console => var obj = new Object();
 undefined
 
 type on console => obj
 {}

 type on console => Object.getPrototypeOf(obj);
 {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
 
 type on console => Object.prototype.isPrototypeOf(obj);
 true
*/


















































































































































































































































































































































