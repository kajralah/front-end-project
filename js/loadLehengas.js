var lehengas = function () {}


lehengas.viewProduct = function(type_of_product,product_code,sub_type_of_product){
  var url_parameter = type_of_product+"&"+product_code+"&"+sub_type_of_product;
  window.open("view_product.html"+"?myParam="+url_parameter,'_self',false);
}

lehengas.default_product = function(title,img,price,type,product_code,type_of_product){
  var result="<div id=\"product\"";
  img += "_small.jpg";
  var image = "<img src="+'"'+img+"\" />";
  result += "<figure align=\"center\">"+image+"<figcaption><p><strong>";
  result += title+"</strong></p><hr style=\"border:0px\"><strong>Price: "+price+" BGN</strong><br>"
  result += "<b><button onclick=\"lehengas.viewProduct('"+type +"','"+product_code+"','"+type_of_product+"')\">View</button></b></figcaption></figure></div>";
  return result;
}

lehengas.getProduct = function(type_of_lehenga) {
  $.getJSON('product_json/lehenga.json',function(data){
      lehengas.showProducts(data[type_of_lehenga],type_of_lehenga);
   });
}

lehengas.showProducts = function(data,type_of_lehenga){
  $("#result").append(data.length + " result found");
  var c = 0;
  for(var row = 0; row < Math.floor((data.length)/3 + 1) ; row++){
    var div = document.createElement('div');
    div.id = "product_div";
    for(var cel= c ;cel < c + 3 ;cel++){
      if(cel < data.length){
        div.innerHTML += lehengas.default_product(data[cel]['title'],data[cel]['img_src'],data[cel]['price'],'lehenga',data[cel]['product_code'],type_of_lehenga);
      }
    }
    $(".row").append(div);
    c+=3;
  } 
}