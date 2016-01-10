function getSarees(){
	$.getJSON("product_json/sarees.json",function(data){
		$("test").append(data)
	})
}