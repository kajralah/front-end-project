var App = function () {}

App.viewProduct = function(type,product_code,type_of_product){
	$.get("view_product.html",[type,product_code,type_of_product],function(data){
		alert(type);
	});
}

App.default_product = function(title,img,price,type,product_code,type_of_product){
	var result="<div id=\"product\"";
	img += "_small.jpg";
	var image = "<img src="+'"'+img+"\" id=\"img\" />";
	result += "<figure align=\"center\">"+image+"<figcaption><p><strong>";
	result += title+"</strong></p><p><strong>Price: "+price+" BGN</strong>"
	result += "  <button id=\"view_button\" onclick=\"App.viewProduct("+type+","+product_code+","+type_of_product+")\">View</button></p></figcaption></figure></div>";
	return result;
}

App.getProduct = function(type_of_product) {
  $.getJSON('product_json/sarees.json',function(data){
   		App.showProducts(data[type_of_product],type_of_product);
   });
}

App.showProducts = function(data,type_of_product){
	$("#result").append(data.length + " result found");
	var c = 0;
	for(var row = 0; row < Math.floor((data.length)/3 + 1) ; row++){
		var div = document.createElement('div');
		div.id = "product_div";
		for(var cel= c ;cel < c + 3 ;cel++){
			if(cel < data.length){
				div.innerHTML += App.default_product(data[cel]['title'],data[cel]['img_src'],data[cel]['price'],'sarees',data[cel]['product_code'],type_of_product);
			}
		}
		$(".row").append(div);
		c+=3;
	}	
}