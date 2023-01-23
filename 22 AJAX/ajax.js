/*
function fetchRandomDogImage() {
  var xhrRequest = new XMLHttpRequest();
  xhrRequest.onload = function () {
    console.log(xhrRequest.response);
  };
  xhrRequest.open("get", "https://dog.ceo/api/breeds/image/random", true);
  xhrRequest.send();
}
$("#fetch-dog-image-button").click(fetchRandomDogImage);
*/





/*-------------------convert string to json object-------image----- */
/*
function fetchRandomDogImage() {
  var xhrRequest = new XMLHttpRequest();
  xhrRequest.onload = function () {
    console.log(xhrRequest.response);

    var responseJSON = JSON.parse(xhrRequest.response);
    var imageUrl = responseJSON.message;
    $("#dog-image").attr("src", imageUrl);
  };
  xhrRequest.open("get", "https://dog.ceo/api/breeds/image/random", true);
  xhrRequest.send();
}
$("#fetch-dog-image-button").click(fetchRandomDogImage);
*/




/*--------------Ajax Request With jQuery-------------------------------- */
/*
function fetchRandomDogImage() {
  $.ajax({
    url: "https://dog.ceo/api/breeds/image/random",
    method: "GET",
    success: function (data) {
      {
        var imageUrl = data.message;
        $("#dog-image").attr("src", imageUrl);
      }
    },
  });
}
$("#fetch-dog-image-button").click(fetchRandomDogImage);
*/








/*
function fetchRandomDogImage() {
  $.ajax({
    url: "https://dog.ceo/api/breeds/image/random",
    method: "GET",
    success: function (data) {
      {
        var imageUrl = data.message;
        $("#dog-image").attr("src", imageUrl);
      }
    },
  });
}

$("#fetch-dog-image-button").click(fetchRandomDogImage);
*/




/*------------------Handling Errors---------------------- */
/*
function fetchRandomDogImage() {
  $ .get('https://dog.ceo/api/breeds/image/random', function (data) {
    var imageUrl = data.message;
    $('#dog-image').attr('src', imageUrl);
  }).fail(function (xhr, textStatus, errorThrown) {
    console.log("Request Failed");
  });
}
$('#fetch-dog-image-button').click(fetchRandomDogImage);
*/



/*
function fetchRandomDogImage() {
  $ .ajax({
  url:'https://dog.ceo/api/breeds/image/random', 
  method :'GET',
  success:function(data){
    var imageUrl = data.message;
    $('#dog-image').attr('src', imageUrl);
  },
  }).fail(function (){
    console.log('error');
  });
}
$('#fetch-dog-image-button').click(fetchRandomDogImage);

*/




function fetchRandomDogImage() {
  var xhrRequest = new XMLHttpRequest();
  xhrRequest.onload = function () {
    //console.log(xhrRequest.response);
    var responseJSON = JSON.parse(xhrRequest.response);
    var imageUrl = responseJSON.message;
    $('#dog-image').attr('src', imageUrl);
  
  };
  xhrRequest.onerror =function(){
    console.log("Request Failed");
  };
  xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random',true);
  xhrRequest.send('');
}
$('#fetch-dog-image-button').click(fetchRandomDogImage);




























































































































