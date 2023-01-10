/*
var var1 = 10;
function outer (){
    var b =40;
    console.log(b);
}
console.log(var1);
    console.log(window.var1);
    window.outer();
*/

/*------------------Revisiting Old Concepts - Scop*/


/*
    var var1 = 10;
    function outer (){
        var a =20;
        var b =40;
        console.log(a,b);
    }
outer();
*/
// 20 40



/*
var var1 = 10;
    function outer (){
        var a =20;
        var b =40;
        console.log(a,b);
    }
outer();
console.log("global");

//20 40
// global
*/


/*
var var1 = 10;
    function outer (){
        var a =20;
        var b =40;
        function inner (){
            var a = 100;
            console.log("inner",a,b);
        }
        inner();
        console.log("outer",a,b);
    }
outer();
console.log("global");

// inner 100 40
// outer 20 40
//  global
*/




/*------------------------Avoid Global Variables----------see scipt2.js--------*/
/*
var name = "file1"
console.log(name);

//file1
//file2
*/


/*
var name = "file1"
setTimeout(function(){
    console.log(name);
},1000);
*/
//file1
//file2







































































































































































































































