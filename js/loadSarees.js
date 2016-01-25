var App = function () {}

App.viewProduct = function(type_of_product,product_code,sub_type_of_product){
	var url_parameter = type_of_product+"&"+product_code+"&"+sub_type_of_product;
	window.open("view_product.html"+"?myParam="+url_parameter,'_self',false);
}

App.default_product = function(title,img,price,type,product_code,type_of_product){
	var result="<div id=\"product\">";
	img += "_small.jpg";
	var image = "<img src="+'"'+img+"\"/>";
	result += "<figure align=\"center\">"+image+"<figcaption><p><strong>";
	result += title+"</strong></p><strong>Price: "+price+" BGN</strong><br>"
	result += "<b><button onclick=\"App.viewProduct('"+type +"','"+product_code+"','"+type_of_product+"')\">View</button></b></figcaption></figure></div>";
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