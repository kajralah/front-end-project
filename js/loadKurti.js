var kurti = function () {}

kurti.viewProduct = function(type_of_product,product_code,sub_type_of_product){
	var url_parameter = type_of_product+"&"+product_code+"&"+sub_type_of_product;
	window.open("view_product.html"+"?myParam="+url_parameter,'_self',false);
}

kurti.default_product = function(title,img,price,type,product_code){
	var result="<div id=\"product\">";
	img += "_small.jpg";
	var image = "<img src="+'"'+img+"\" id=\"little_img\" />";
	result += "<figure align=\"center\">"+image+"<figcaption><p><strong>";
	result += title+"</strong></p><strong>Price: "+price+" BGN</strong><br>"
	result += "<b><button onclick=\"kurti.viewProduct('"+type +"','"+product_code+"','"+type+"')\">View</button></b></figcaption></figure></div>";
	return result;
}

kurti.getProduct = function(type_of_product) {
  	$.getJSON('product_json/kurti.json',function(data){
   		kurti.showProducts(data[type_of_product]);
   });
}

kurti.showProducts = function(data){
	$("#result").append(data.length + " result found");
	var c = 0;
	for(var row = 0; row < Math.floor((data.length)/3 + 1) ; row++){
		var div = document.createElement('div');
		div.id = "product_div";
		for(var cel= c ;cel < c + 3 ;cel++){
			if(cel < data.length){
				div.innerHTML += kurti.default_product(data[cel]['title'],data[cel]['img_src'],data[cel]['price'],'kurti',data[cel]['product_code']);
			}
		}
		$(".row").append(div);
		c+=3;
	}
}