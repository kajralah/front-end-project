var lehengas = function () {}

lehengas.default_product = function(title,img,price){
  var result="<div id=\"product\"";
  img += "_small.jpg";
  var image = "<img src="+'"'+img+"\" id=\"img\" />";
  result += "<figure align=\"center\">"+image+"<figcaption><p><strong>";
  result += title+"</strong></p><hr style=\"border:0px\"><p><strong>Price: "+price+" BGN</strong>"
  result += "  <button id=\"view_button\">View</button></p></figcaption></figure></div>";
  return result;
}

lehengas.getProduct = function(type_of_lehenga) {
  $.getJSON('product_json/lehenga.json',function(data){
      lehengas.showProducts(data[type_of_lehenga]);
   });
}

lehengas.showProducts = function(data){
  $("#result").append(data.length + " result found");
  var c = 0;
  for(var row = 0; row < Math.floor((data.length)/3 + 1) ; row++){
    var div = document.createElement('div');
    div.id = "product_div";
    for(var cel= c ;cel < c + 3 ;cel++){
      if(cel < data.length){
        div.innerHTML += lehengas.default_product(data[cel]['title'],data[cel]['img_src'],data[cel]['price']);
      }
    }
    $(".row").append(div);
    c+=3;
  } 
}