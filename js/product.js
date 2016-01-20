var Product = function() {}

Product.getParam = function (parameter){
	var parameters = parameter.split('&');
	var type_of_product = parameters[0];
	var product_code = parameters[1];
	var sub_type_of_product = parameters[2];
	Product.viewProduct(type_of_product,product_code,sub_type_of_product);
}

Product.viewProduct = function(type_of_product,product_code,sub_type_of_product,is_for_buy){
	  $.getJSON('product_json/'+type_of_product+'.json',function(data){
   		return Product.getProduct(data[sub_type_of_product],product_code,type_of_product,sub_type_of_product);
   });
}

Product.getProduct = function(data,product_code,type_of_product,sub_type_of_product){
	for(var i=0;i<data.length;i++){
		if(data[i]['product_code'] === product_code){
			/*the product we want*/
			var product_data = data[i];
				return Product.visualizeProduct(product_data,type_of_product,sub_type_of_product);
		}
	}
}

Product.visualizeProduct = function(product_data,type_of_product,sub_type_of_product) {

	/*now we add the product content in the div*/
	var result="<div style=\"display : flex\">";

	var img = product_data['img_src']+ "_big.jpg";
	var image = "<img src="+'"'+img+"\" id=\"img\" height=\"450\" width=\"350\"/>";

	result += "<div id=\"product_image\">"+image+"</div>";

	/*vertical line*/
	result += "<div style=\"border-left: solid rgba(255, 255, 255, 0);\"></div>";

	result += "<div id=\"product_info\"><div id=\"title\"><h2><strong>"+product_data['title']+"</strong></h2></div>";
	result += "<div id=\"product_price\"><h4><strong>Price: "+product_data['price']+" BGN</strong></h4>";
	result += "<h6>Available quantity: "+product_data['available_quantity']+" pieces</h6>";
	result += "<button onclick=\"Product.buy('"+product_data['title']+','+img+','+product_data['price']+"')\">Buy</button>";
	result += "<div id=\"description\"><h4><b>Description:<b></h4><p>"+product_data['description']+"</p></div></div></div></div>";
	/*appending it in the html page*/
	$('.row').append(result);
}

Product.buy = function(product_title){
	window.open("buy.html"+"?myParam="+product_title,'_self',false);
}

Product.buy_info = function(data){
	var data = data.split(',');
	var title = data[0].replace(/%20/g,'')
	var img = data[1];
	var price = data[2];
	var image = "<img src="+'"'+img+"\" id=\"img\" height=\"350\" width=\"250\"/>";

	var result = "<div>";
	result += "<figure>"+image+"<figcaption id=\"fig\"><p><strong>";
	result += title+"</strong></p></figcaption></figure><p><strong>Price: "+price+" BGN</strong>"
	$("#product_buy_info").append(result);
}