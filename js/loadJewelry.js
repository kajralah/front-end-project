var jewelry = function () {}

jewelry.viewProduct = function(type_of_product,product_code,sub_type_of_product){
  var url_parameter = type_of_product+"&"+product_code+"&"+sub_type_of_product;
  window.open("view_product.html"+"?myParam="+url_parameter,'_self',false);
}

jewelry.default_product = function(title,img,price,type,product_code){
	var result="<div id=\"product\"";
	img += "_small.jpg";
	var image = "<img src="+'"'+img+"\" id=\"little_img\" />";
	result += "<figure align=\"center\">"+image+"<figcaption ><p><strong>";
	result += title+"</strong></p><hr style=\"border:0px\"><p><strong>Price: "+price+" BGN</strong><br>"
	result += "<button id=\"view_button\" onclick=\"jewelry.viewProduct('"+type +"','"+product_code+"','"+type+"')\">View</button></p></figcaption></figure></div>";
	return result;
}

jewelry.getProduct = function(type_of_jewelry) {
  $.getJSON('product_json/'+type_of_jewelry+'.json',function(data){
   		jewelry.showProducts(data[type_of_jewelry],type_of_jewelry);
   });
}

jewelry.showProducts = function(data,type_of_jewelry){
	$("#result").append(data.length + " result found");
	var c = 0;
	for(var row = 0; row < Math.floor((data.length)/3 + 1) ; row++){
		var div = document.createElement('div');
		div.id = "product_div";
		for(var cel= c ;cel < c + 3 ;cel++){
			if(cel < data.length){
				div.innerHTML += jewelry.default_product(data[cel]['title'],data[cel]['img_src'],data[cel]['price'],type_of_jewelry,data[cel]['product_code']);
			}
		}
		$(".row").append(div);
		c+=3;
	}	
}