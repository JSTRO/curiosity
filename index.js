var baseUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&";
var apiKey = "api_key=yXagGhEcvXJrTEFKzLFx2iJYPAfUI6bwgLy8JuI8";
var cameraList = ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "NAVCAM"];
var camera;
var url;

$("button.dropdown-item").click(function() {
  camera = cameraList[this.id];
  url = baseUrl + "camera=" + camera + "&" + apiKey;
  var dropdownTitle = $("button.dropdown-item#" + this.id).text();
  $(".dropdown-toggle").html(dropdownTitle);

  $(".images").empty();

  $.getJSON(url, function(data) {
    var items = [];
    for (i=0; i<data.photos.length; i++) {
      items.push("<div class='row' id='" + data.photos[i].id + "'>" + 
                   "<div class='col-md-6'><img src='" + 
                   data.photos[i].img_src + "'></div>" + 
                 "</div" );
    }

    $( "<div/>", {
      "class": "container-fluid", 
      html: items.join( "" )
    }).appendTo(".images");

  });        
});

 



