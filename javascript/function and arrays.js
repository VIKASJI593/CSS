
/*
//fuctions
function showAlert(){
    alert("hey!!");
}
showAlert();
*/



/*
//parameter(msg)
function showAlert(msg){
    alert("msg!!");
}
showAlert("hello!!!");
*/




//-----------------more than one input------------------------
/*
//10
function sum(a,b){
    console.log(a+b);
}
sum(4,6);
*/



/*
function sum(a,b){
    return a+b;
}
var result = sum(4,6);
console.log(result);
*/



/*--------------------------------------------------------variable length argument---------------------------------------------------------*/
/*
function sum(a,b){
    console.log(a,b);
    return a+b;
}
var result = sum(4);
console.log(result);

//0utput-
// 4
// NaN
*/

//EXTRA ARGUMENT IGNORED{YHA 3 ARGUMENT DIYA BUT FUNCTION 2 KA HI HAI ISLIYE 3RD KO IGNORE KR DIYA}
/*
function sum(a,b){
    console.log(a,b);
    return a+b;
}
var result = sum(4,5,6);
console.log(result);

//OUTPUT-
// 4 5
// 9
*/






/*----------------------------------------------------------------FUNCTION HOISTING---------------------------------------*/
/*
//--------------------------------------variable hoisting-----------------------------------------------
//output gives error
function hoistDemo(){
    console.log(i);
}
hoistDemo();
*/



/*
// otput-undefined
function hoistDemo(){
    console.log(i);
    var i =10;
}
hoistDemo();
*/


/*
//output-undefined
console.log(j);
function hoistDemo(){
    console.log(i);
    var i =10;
}
hoistDemo();
var j =10;
*/

//---------------------------------------------function hoisting-------------------------------------------------------

/*
//output-undefined
console.log(j);
hoistDemo();
function hoistDemo(){
    console.log(i);
    var i =10;
}

var j =10;
*/




/*------------------------------------------functions and scope-------------------------------------------------------------*/
/*
//scope
var name = "scope";
console.log(name);
*/




/*
//10
function scopedemo(){
    var i = 10;
    console.log(i);
}
scopedemo();
*/



var name = "global"
function scopedemo(){
    var name = "function"
    console.log(name);
}
scopedemo();
console.log(name);
























































































