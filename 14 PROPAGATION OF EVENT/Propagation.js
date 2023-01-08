//-----------------------inner---------------------------------------
/*
var innerDiv = document.getElementById('inner');
innerDiv.addEventListener('click',function(){
    console.log('Click Inner Div');
});
*/





//------------------------------outer------------------------------------------
/*
var outerDiv = document.getElementById('outer');
outerDiv.addEventListener('click',function(){
    console.log('Click Outer Div');
});
*/





//----------------------------inner+outer---------------------------------------
/*
var innerDiv = document.getElementById('inner');
innerDiv.addEventListener('click',function(){
    console.log('Click Inner Div');
});
var outerDiv = document.getElementById('outer');
outerDiv.addEventListener('click',function(){
    console.log('Click Outer Div');
});
*/







//--------------------------all at same time-------------------------
/*
var innerDiv = document.getElementById('inner');
innerDiv.addEventListener('click',function(){
    console.log('Click Inner Div');
});
var outerDiv = document.getElementById('outer');
outerDiv.addEventListener('click',function(){
    console.log('Click Outer Div');
});
document.addEventListener('click',function(){
    console.log('Click Document');
});
*/





//--------------stop propagation--------------SEPARATE INNER OUTER--------------------

var innerDiv = document.getElementById('inner');
innerDiv.addEventListener('click',function(event){
    console.log('Click Inner Div');
   event.stopPropagation();
});
var outerDiv = document.getElementById('outer');
outerDiv.addEventListener('click',function(event){
    console.log('Click Outer Div');
    event.stopPropagation();
});








































































































