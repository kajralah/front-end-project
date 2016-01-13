function viewProduct(type,product_code,type_of_product){
	  $.getJSON('product_json/'+type+'.json',function(data){
   		getProduct(data[type_of_product],product_code);
   });
}

function getProduct(data,product_code) {
	var product_data;
	for(var i=0;i<data.length;i++){
		if(data[i][product_code] === product_code){
			product_code = data[i][product_code];
		}
	}
}