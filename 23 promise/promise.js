/*
var promise = new Promise((resolve,reject) => {
// wait for 1 sec
  setTimeout (() => {
    //promise is resolved
  resolve();
},1000);
});
promise.then (() =>{
console.log("successful")
});
*/
//successful




/*
var userLoggedIn = false;
var promise = new Promise((resolve,reject) => {
  // wait for 1 sec
    setTimeout (() => {
      //promise is resolved
    if(userLoggedIn){
      resolve();
    }else{
      //reject
      reject();
    }
      
  },1000);
  });
  promise.then (() =>{
  console.log("User Logged In")

  }) .catch(() => { console.log("User Not Logged In")});

//User Not Logged In
*/




/*
var userLoggedIn = true;
var promise = new Promise((resolve,reject) => {
  // wait for 1 sec
    setTimeout (() => {
      //promise is resolved
    if(userLoggedIn){
      resolve();
    }else{
      //reject
      reject ();
    }
    },1000);
  });
setTimeout (() => {
userLoggedIn = false;
},500);

  promise.then (() =>{
  console.log("User Logged In")

  }) .catch(() => { console.log("User Not Logged In")});

//User Not Logged In
*/






/*
var userLoggedIn = true;
var promise = new Promise((resolve,reject) => {
  // wait for 1 sec
    setTimeout (() => {
      //promise is resolved
    if(userLoggedIn){
      resolve();
    }else{
      //reject
      reject ();
    }
    },1000);
  });
// setTimeout (() => {
// userLoggedIn = false;
// },500);s

  promise.then (() =>{
  console.log("User Logged In")

  }) .catch(() => { console.log("User Not Logged In")});

//User Logged In
*/





/*------------------------Passing Parameters to Resolve/Reject------------------- */
/*
var userLoggedIn = true;
var promise = new Promise((resolve,reject) => {
  // wait for 1 sec
    setTimeout (() => {
      //promise is resolved
    if(userLoggedIn){
      resolve();
    }else{
      //reject
      reject ();
    }
    },1000);
  });
// setTimeout (() => {
// userLoggedIn = false;
// },500);s

  promise.then (() =>{ console.log("User Logged In");  }) .catch(  () => { console.log("User Not Logged In")}   );
*/




/*
var userLoggedIn = true;
var promise = new Promise((resolve,reject) => {
  // wait for 1 sec
    setTimeout (() => {
      //promise is resolved
    if(userLoggedIn){
      resolve("User Logged In");
    }else{
      //reject
      reject ();
    }
    },1000);
  });
setTimeout (() => {
userLoggedIn = true;
},500);

promise.then ((succesMsg) =>{ console.log(succesMsg);  }) .catch(  () => { console.log("User Not Logged In")}   );

//User Logged In
*/




/*
var userLoggedIn = true;

function checkUserLoggedIn(){

var promise = new Promise((resolve,reject) => {
  // wait for 1 sec
    setTimeout (() => {
      //promise is resolved
    if(userLoggedIn){
      resolve("User Logged In");
    }else{
      //reject
      reject ();
    }
    },1000);
  });
return promise;
}

setTimeout (() => {
userLoggedIn = true;
},500);

checkUserLoggedIn().then ((succesMsg) =>{ console.log(succesMsg);  }) .catch(  () => { console.log("User Not Logged In")}   );

//User Logged In
*/






var userLoggedIn = true;

function checkUserLoggedIn(){

var promise = new Promise((resolve,reject) => {
  // wait for 1 sec
    setTimeout (() => {
      //promise is resolved
    if(userLoggedIn){
      resolve("User Logged In");
    }else{
      //reject
      reject ();
    }
    },1000);
  });
return promise;
}

setTimeout (() => {
userLoggedIn = true;
},500);

checkUserLoggedIn().then ((succesMsg) =>{ console.log(succesMsg);  }) .catch(  () => { console.log("User Not Logged In")}   );

//User Logged In















































































































































































































































