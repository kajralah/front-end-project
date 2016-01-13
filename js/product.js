var Product = function() {}

Product.getParam = function (parameter){
	var parameters = parameter.split('+');
	var type_of_product = parameters[0];
	var product_code = parameters[1];
	var sub_type_of_product = parameters[2];

}

Product.viewProduct = function(type,product_code,type_of_product){
	  $.getJSON('product_json/'+type+'.json',function(data){
   		getProduct(data[type_of_product],product_code);
   });
}

Product.getProduct = function(data,product_code) {
	var product_data;
	for(var i=0;i<data.length;i++){
		if(data[i][product_code] === product_code){
			product_code = data[i][product_code];
		}
	}
}