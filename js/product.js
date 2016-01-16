var Product = function() {}

Product.getParam = function (parameter){
	var parameters = parameter.split('&');
	var type_of_product = parameters[0];
	var product_code = parameters[1];
	var sub_type_of_product = parameters[2];
	Product.viewProduct	(type_of_product,product_code,sub_type_of_product);
}

Product.viewProduct = function(type_of_product,product_code,sub_type_of_product){
	  $.getJSON('product_json/'+type_of_product+'.json',function(data){
   		return Product.getProduct(data[sub_type_of_product],product_code);
   });
}

Product.getProduct = function(data,product_code){
	for(var i=0;i<data.length;i++){
		if(data[i]['product_code'] === product_code){
			/*the product we want*/
			var product_data = data[i];
			return Product.visualizeProduct(product_data);
		}
	}
}

Product.visualizeProduct = function(product_data) {

	/*now we add the product content in the div*/
	var result="<div style=\"display : flex\">";

	var img = product_data['img_src']+ "_big.jpg";
	var image = "<img src="+'"'+img+"\" id=\"img\" height=\"450\" width=\"350\"/>";

	result += "<div id=\"product_image\">"+image+"</div>";

	/*vertical line*/
	result += "<div style=\"border-left: solid rgba(255, 255, 255, 0);\"></div>";

	result += "<div id=\"product_info\"><div id=\"title\"><h2><strong>"+product_data['title']+"</strong></h2></div>";
	result += "<div id=\"product_price\"><p><strong>Price: "+product_data['price']+" BGN</strong></p>";
	result += "<h6>Available quantity: "+product_data['available_quantity']+" pieces</h6>";
	result += "<button 	onclick=\"Product.buy('"+product_data['title'] +"','"+product_data['price']+"')\">Buy!</button>";
	result += "<div id=\"description\"><h4><b>Description:<b></h4><p>"+product_data['description']+"</p></div></div></div></div>";
	/*appending it in the html page*/
	$('.row').append(result);
}

Product.buy = function(title,price){
}

	/*.done(function(){
		window.open("buy.html",'_self',false);
	});*/
	/*window.open("view_product.html"+"?myParam="+title,'_self',false);*/
