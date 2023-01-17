/*
var i = 10;
function outer (){
    var j = 20;
    console.log(i,j);
    var inner = function(){
        var k =30;
        console.log(j,k);
    }
    return inner;
}
var inner = outer();
inner();

//10 20
//20 30
*/



/*
var i = 10;

function outer (){
    var j = 20;
    console.log(i,j);
  function inner(){
        var k =30;
        
        console.log(j,k);
    }
     inner;
}
outer();

//10 20
*/

//--------------------------more on closures---------------------

/*
var i = 10;

function outer (){
    var j = 20;
   // console.log(i,j);
  var  inner = function (){
        var k =30;
        console.log(j,k);
        //j++;
        k++;
    }
    return inner;
}
var  inner = outer();
inner();
inner();

//20 30
//20 30
*/




/*
var i = 10;

function outer (){
    var j = 20;
   // console.log(i,j);
  var  inner = function (){
        var k =30;
        console.log(j,k);
        j++;
        k++;
    }
    return inner;
}
var  inner = outer();
inner();
inner();

//20 30
//21 30
*/




/*
var i = 10;

function outer (){
    var j = 20;
   // console.log(i,j);
  var  inner = function (){
        var k =30;
        console.log(i,j,k);
        i++;
        j++;
        k++;
    }
    return inner;
}
var  inner = outer();
inner();
inner();

//10 20 30
//11 21 30
*/




/*
var i = 10;

function outer (){
    var j = 20;
   // console.log(i,j);
  var  inner = function (){
        var k =30;
        console.log(i,j,k);
        i++;
        j++;
        k++;
    }
    return inner;
}
var  inner = outer();
inner();
inner = outer();
inner();

//10 20 30
//11 21 30

*/





/*
var i = 10;

function outer (){
    var j = 20;
    console.log(i,j);
  var  inner = function (){
        var k =30;
        console.log(j,k);
        j++;
        k++;
    }
    return inner;
}
var  inner = outer();
inner();
outer();
*/





//-----------------Closures and let---------------------

/*
for (var i=1; i<=5; i++){
setTimeout(function(){
    console.log(i);
},1000);
}
console.log("after for loop",i);
*/

// after for loop 6
// 6
// 6
// 6
// 6
// 6




/*
function test (){
    for (var i=1; i<=5; i++){
        setTimeout(function(){
            console.log(i);
        },1000);
        }
    }
    test();

// 6
// 6
// 6
// 6
// 6
*/



// function test (){
// for (let i=1; i<=5; i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000);
//     }
// }
// test();

    // 1
    // 2
    // 3
    // 4
    // 5



/*-----------------------------Let in for loops------------*/

/*
var arr = new Array(6);
for (let i=1; i<=5; i++){
i++;
arr[i] = function(){
console.log(i);
}
i--;
}
*/





//-------------------------Arrow Functions-------------------------
/*
var multiply = function(x,y){
return x*y;
}

//------------or----------
var multiply = (x,y) => x*y;
*/



/*
var multiply = (x,y) => x*y;
var double = x => 2*x;
console.log(multiply(4,6));
*/





//arrow function use to one line code
//var multiply = (x,y) => x*y;









// var multiply = (x,y) => x*y;
// console.log(multiply(4,6));






/*--------Bindings in Arrow Function-----------*/
/*
function person (name){
    this.name = name;
    console.log(this);
    setTimeout (function(){
        console.log(this);
    },1000);
}
var p= new person("manisha");

//person {name: 'manisha'}name: "manisha"[[Prototype]]: Object
//Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
*/


function person (name){
    this.name = name;
    console.log(this);
    setTimeout (() =>console.log(this),1000);

     }
var p= new person("manisha");

//person {name: 'manisha'}
//person {name: 'manisha'}







































