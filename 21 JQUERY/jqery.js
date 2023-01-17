

// var para1 = document.getElementById('para1');
// para1.innerHTML = "welcome";

/*
$('#para1').html('Welcome');
//Welcome
//sample paragraph
*/

/*
function $(query){
return document.querySelector(query);
}
*/






/*
$('#para1').text('welcome')
//Welcome
//sample paragraph
*/




/*
$('#para1').hide()
//sample paragraph
*/



/*
$('#para1').width(1000)
// sample paragraph
// sample paragraph
*/



$('p').html("welcome");
//welcome
//welcome

/*
//output1
var paras =$('p');
undefined
paras
jQuery.fn.init(2) [p#para1, p#para1, prevObject: jQuery.fn.init(1)]
paras.html("changed");
jQuery.fn.init(2) [p#para1, p#para1, prevObject: jQuery.fn.init(1)]
*/



/*
//output 2
type on console => var paras =$('p');
undefined

type on console => paras
jQuery.fn.init(2) [p#para1, p#para1, prevObject: jQuery.fn.init(1)]

type on console => var p1 = paras.eq(0);
undefined

type on console => p1
jQuery.fn.init [p#para1, prevObject: jQuery.fn.init(2)]

type on console => p1.html("Para1");
jQuery.fn.init [p#para1, prevObject: jQuery.fn.init(2)]

type on console => var p = paras[0];
undefined

type on console => p
<p id=​"para1">​Para1​</p>​


//this gives error because p i not jquery object
type on console => p.html('hey');
VM1796:1 Uncaught TypeError: p.html is not a function
    at <anonymous>:1:3
(anonymous) @ VM1796:1

type on console => p1.html("hey");
jQuery.fn.init [p#para1, prevObject: jQuery.fn.init(2)]

type on console => p.innerHTML = "hhh";
'hhh'

type on console => p
<p id=​"para1">​hhh​</p>​

type on console => $(p)
jQuery.fn.init [p#para1]


*/


















































































































































































