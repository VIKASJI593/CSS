/*
function displayImage(data) {
  $('<img>', {
    src: data.url,
    height: '100%',
    width: '100%',
  }).appendTo('#image-container');
}
$.ajax({
  url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
  method: 'GET',
  sucess: displayImage,
});
*/


//-------------------------------date--------------
/*
function displayImage(data) {
    $('<img>', {
      src: data.url,
      height: '100%',
      width: '100%',
    }).appendTo('#image-container');
  }
  $.ajax({
    url: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2018-06-05',
    method: 'GET',
    sucess: displayImage,
  });
  */





/*
  function displayImage(data) {
    $('<img>', {
      src: data.url,
      height: '100%',
      width: '100%',
    }).appendTo('#image-container');
  }
  $.ajax({
    url: 'https://api.nasa.gov/planetary/apod',
    method: 'GET',
    sucess: displayImage,
    data : {
        api_key : 'DEMO_KEY',
        date : '2018-06-05',
    }
  });
*/





/*
function displayImage(data) {
    var img = $(document.createElement('img'));
    img.attr('src',data.url)
   img.appendTo('#image-container');
  }
  $.ajax({
    url: 'https://api.nasa.gov/planetary/apod',
    method: 'GET',
    sucess: displayImage,
    data : {
        api_key : 'DEMO_KEY',
        date : '2018-06-05',
    }
  });
*/




function displayImage(data) {
  var img = $(document.createElement('img')).attr('src',data.url).appendTo('#image-container');
}
$.ajax({
  url: 'https://api.nasa.gov/planetary/apod',
  method: 'GET',
  sucess: displayImage,
  data : {
      api_key : 'DEMO_KEY',
      date : '2018-06-05',
  }
});























































































































