var App = function () {}

App.default_product = function(title,img,price){
	var result="<div id=\"product\"";
	img += "_small.jpg";
	var image = "<img src="+'"'+img+"\" id=\"img\" />";
	result += "<figure align=\"center\">"+image+"<figcaption><p><strong>";
	result += title+"</strong></p><p><strong>Price: "+price+" BGN</strong>"
	result += "  <button id=\"view_button\">View</button></p></figcaption></figure></div>";
	return result;
}

App.getProduct = function(product,type_of_product) {
  $.getJSON('product_json/'+product+'.json',function(data){
   		App.showProducts(data[type_of_product]);
   });
}

App.showProducts = function(data){
	$("#result").append(data.length + " result found");
	var c = 0;
	for(var row = 0; row < Math.floor((data.length)/3 + 1) ; row++){
		var div = document.createElement('div');
		div.id = "product_div";
		for(var cel= c ;cel < c + 3 ;cel++){
			if(cel < data.length){
				div.innerHTML += App.default_product(data[cel]['title'],data[cel]['img_src'],data[cel]['price']);
			}
		}
		$(".row").append(div);
		c+=3;
	}	
}
