var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=yXagGhEcvXJrTEFKzLFx2iJYPAfUI6bwgLy8JuI8"

$.getJSON(url, function(data) {

  var items = [];
  for (i=0; i<data.photos.length; i++) {
    items.push("<li id='" + data.photos[i].id + "'>" + "<img src='" + data.photos[i].img_src + "'>" + "</li>" );
  }

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo("div");
});