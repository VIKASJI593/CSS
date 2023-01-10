/*
var a = 10
a = 20
console.log(a)
*/




/*-----const not change the value it gives error---------*/
/*
var a = 10
a = 20
console.log(a)
const c = 30
c = 40
*/



/*
var a;
console.log(a)
//undefined
*/

//--------error------
/*
var a;
console.log(a)
a = 20
console.log(a)
const c =40;
c =30;
//undefined
//20
*/

//----const we cannot initialise value after--------
/*
var a;
console.log(a)
a = 20
console.log(a)
const c ;
c =30;
*/



/*
console.log(a)
var a = 20
//undefined
*/



//----const is not hoisted-------
/*
console.log(c)
const c = 30
*/


/*-----------------let--------------*/
/*
var a = 10;
if(a<=10){
    var b = 40;
}else{
    var c = 50;
}
console.log(a,b,c);

// 10 40 undefined
*/



/*
var a = 10;
console.log(a,b,c);
if(a<=10){
    var b = 40;
}else{
    var c = 50;
}
console.log(a,b,c);

// 10 undefined undefined
// 10 40 undefined
*/



//---------------llet available only in enclosing block scope-----------
/*
var a = 10;
if(a<=10){
    let b = 40;
}else{
    var c = 50;
}
console.log(a,b,c);
*/
//ReferenceError: b is not defined





/*
console.log(a);
var a = 10;
if(a<=10){
    console.log(b);
    let b = 20;
}
//ReferenceError: Cannot access 'b' 
*/






/*-----------let v/s var-----------------*/
/*
for(var i =1; i <=5; i++){
setTimeout(function(){
console.log(i);
},1000);
}
*/
// 6
// 6
// 6
// 6
// 6


/*
for(let i =1; i <=5; i++){
    setTimeout(function(){
    console.log(i);
    },1000);
    }

    // 1
    // 2
    // 3
    // 4
    // 5
*/





/*--------------For of loop------------------*/

var arr = [1,2,3,4];
for(let i =0; i < arr.length; i++){
    console.log(arr[i]);
}
for(let i of arr){
    console.log(i);
}

// 1
// 2
// 3
// 4
// 1
// 2
// 3
// 4




















































































































































































































































































































































































































































































































































































































































































































































